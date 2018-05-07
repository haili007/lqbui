<template>
  <div  v-clickoutside="handlerEnd" :class="'kz-fuzzy '+(isSelect?'is-focus':'')">
      <input 
        ref="sercheInput"
        @focus="isSelect = true"
        @keydown="handlerKeydown"
         placeholder="请输入字符查询" 
         v-model="inputValue" 
         class="kz-fuzzy-input" 
      type="text" />
      <span class="kz-fuzzy-type">
        <slot v-if="$slots.btn" name="btn"></slot>
        <span @click="togleFold" class="kz-triangle-down" v-else>  
        </span>
      </span>    
      <div v-show="!fold" class="kz-droplist-wrap" :style="'width:'+warpWidth">
        <div  class="popper__arrow" style="left: 35px;"></div>
        <div ref="droplist" class="kz-droplist" >
          <div class="kz-serche-head" v-if="opts.length>1"  >
            <span :key="index"  v-for="(item,index) in opts" :style="(!item.width?'flex:1;':'')+'width:'+item.width"  >
                {{item.label}}
            </span> 
          </div>
          <div  v-if="filterList.length>0">
            <div 
              @click='handlerClick(item)' 
              @mouseenter='handlerEnter(index)'
              :key="index" v-for="(item,index) in filterList"
               :class="'kz-list-item '+(current==index?'on':'')" >
               <p style="display:flex;width:100%;height:100%" v-if="opts.length>0" >
                 <span :key="index"
                v-for="(opt,index) in opts"
                :style="(!opt.width?'flex:1;':'')+'width:'+opt.width" 
                >
                    {{item[opt.prop]}}
                </span>
               </p>
              <span v-else style="flex:1"  >
                  {{item}}
              </span>
            </div>
          </div>
          <div v-else style="text-align:center"  >
              <span style="flex:1">没有匹配的选项</span>
          </div>
        </div>
        <slot></slot>
      </div>  
  </div>
</template>

<script>
import Clickoutside from "../../lib/clickoutside";
import scrollIntoView from "../../lib/scroll-into-view";
export default {
  name: "kz-fuzzy",
  data() {
    return {
      fold: true,
      current: 0,
      isSelect: false,
      all:true
    };
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    },
    filterList() {
      // `this` points to the vm instance
      var key = this.inputValue;
      var data = this.data;
      if (key == "" || !this.filter||this.all) {
        return data;
      }
      return data.filter(function(item) {
        let fit = false;
        if (typeof item == "number" || typeof item == "string") {
          return (
            item
              .toString()
              .toLowerCase()
              .indexOf(key.toString().toLowerCase()) != -1
          );
        }
        for (let k in item) {
          if (
            item[k]
              .toString()
              .toLowerCase()
              .indexOf(key.toString().toLowerCase()) != -1
          ) {
            fit = true;
          }
        }
        return fit;
      });
    },
    
    warpWidth() {
      let unm=0,ext="px";
      if(this.opts.length>0){
        ext=this.getEXt(this.opts[0].width)||"px";
        for(let i=0;i<this.opts.length;i++){
          if(this.opts[i].width){
            unm+=parseFloat(this.opts[i].width);
          }
        }
      };
      if(unm==0){
        return "100%";
      }
      return unm+ext;
    }
  },
  props: {
    value: {},
    data: {
      type: Array,
      default: []
    },
    opts: {
      type: Array,
      default: function () {
        return []
      }
    },
    filter: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handlerKeydown(e) {
      if (e.code == "ArrowDown" && !this.fold) {
        this.current =
          (this.current + this.filterList.length + 1) % this.filterList.length;
      }
      if (e.code == "ArrowUp" && !this.fold) {
        this.current =
          (this.current + this.filterList.length - 1) % this.filterList.length;
      }
      let menu = this.$refs.droplist;
      if (menu) {
        let target = this.$refs.droplist.children[1].children[this.current];
        scrollIntoView(menu, target);
      }
      if (e.code != "Tab") {
        this.fold = false;
        this.all=false;
      }

      this.$emit("keydown", e);
    },
    handlerEnd(e) {
      this.fold = true;
      this.isSelect = false;
    },
    handlerEnter(i) {
      this.current = i;
    },
    handlerClick(row) {
      this.fold = !this.fold;
      if (typeof row == "number" || typeof row == "string") {
        this.inputValue = row;
      }else{
        this.inputValue = row[this.opts[0].prop];
      }
      this.isSelect = true;
      this.$emit("change", row);
    },
    togleFold(e) {
      this.fold = !this.fold;
      this.isSelect = true;
      this.all=true;
      if (!this.fold) {
        this.$refs.sercheInput.focus();
      }
      
    },
    getEXt(str){
      if(!str||typeof str !="string" )
      {
        return ""
      }
      return str.replace(str.match(/(-?\d+)(\.\d+)?/)[0],"")
    },
  },
  directives: { Clickoutside },
  mounted() {}
};
</script>

<style>


.kz-fuzzy {
  position: relative;
  width: 180px;
  height: 40px;
  max-width: 100%;
  max-height: 100%;
}

.kz-fuzzy-input {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.kz-fuzzy.is-focus .kz-fuzzy-input {
  border-color: #409eff;
}
.kz-droplist-wrap {
  width: 100%;
  position: absolute;
  left: 0px;
  top: 122%;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
}
.kz-droplist {
  border-radius: 5px;
  max-height: 150px;
  overflow: auto;
  background: #fff;
  padding: 3px;
  list-style: none;
  padding: 0px 0 6px;
  margin: 0;
  box-sizing: border-box;
}

.kz-droplist .kz-serche-head {
  background-color: #f5f7fa;
  color: #323232;
  cursor: pointer;
  display: flex;
  padding: 7px 8px;
}
.kz-droplist .kz-list-item {
  padding: 3px 5px;
  margin: 2px 0px;
  display: flex;
  font-size: 14px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606266;
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  cursor: pointer;
}
.kz-droplist .kz-list-item span,
.kz-droplist .kz-serche-head span {
  display: inline-block;
}
.kz-list-item:hover,
.kz-list-item.on {
  background-color: #f5f7fa;
}

.kz-fuzzy-type {
  position: absolute;
  right: 5px;
  top: 19px;
  margin-top: -10px;
}
.kz-triangle-down {
  padding: 0 5px;
  cursor: pointer;
  display: block;
  height: 100%;
  min-height: 20px;
}
.kz-triangle-down::after {
  content: " ";
  width: 0;
  height: 0;
  display: block;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 6px solid rgb(95, 95, 95);
  position: relative;
  top: 8px;
}
.kz-fuzzy .popper__arrow {
    top: -6px;
    left: 50%;
    margin-right: 3px;
    border-top-width: 0;
    border-bottom-color: #ebeef5;
    border-width: 6px;
    filter: drop-shadow(0 2px 12px rgba(0,0,0,.03));
}
.kz-fuzzy .popper__arrow::after {
    content: " ";
    border-width: 6px;
}
.kz-fuzzy .popper__arrow, .kz-fuzzy .popper__arrow::after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
}
</style>
