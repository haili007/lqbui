<template>
  <div class="kz-basic-table-container">
    <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
    <table :style="'width:'+tableWdith" class="kz-basic-table" cellspacing="0" cellpadding="0" >
      <table-head  ref="tests" @select="changeSelect" :selects="selectData"  :col="childData" :data="data"></table-head>
      <table-body @click="handlerClick" :row-class-name="rowClassName" @select="changeSelect" :selects="selectData"  :col="childData" :col-component="childColComponent" :data="data"></table-body>
      <table-footer-dom :foot-component="footComponent"></table-footer-dom>
    </table>
    <span style="height:0;width:0px;display:block;overflow:hidden"><input type="checkbox"></span>
    
  </div>
</template>
<script>
import tableHead from "../table/TableHead";
import tableBody from "../table/TableBody";
import TableFooterDom from "../table/TableFooterDom";
export default {
  name: "kz-table",
  data() {
    return {
      childData: [],
      childColComponent: [],
      selectData: [],
      footComponent:{}
    };
  },
  methods: {
    handlerClick(e){
      this.$emit("row-click",e)
    },
    addItem(data) {
      if (data.value == "all") {
        this.selectData = [];
        for (let i = 0; i < this.data.length; i++) {
          this.selectData.push(this.data[i]);
        }
      } else {
        this.selectData.push(this.data[data.value]);
      }
    },
    removeItem(data) {
      if (data.value == "all") {
        this.selectData = [];
      } else {
        if (this.selectData.indexOf(this.data[data.value]) > -1) {
          this.selectData.splice(
            this.selectData.indexOf(this.data[data.value]),
            1
          );
        }
      }
    },
    changeSelect(data) {
      if (data.checked) {
        this.addItem(data);
      } else {
        this.removeItem(data);
      }
    }
  },
  watch: {
    selectData(val, oval) {
      this.$emit("checkboxChange", this.selectData);
    }
  },
  props: {
    rowClassName:{
      defautl:null
    },
    data: {
      type: Array,
      defautl: []
    },
    tableWdith:{
      type:String,
      defautl:"100%"
    }
  },
  components: {
    tableHead,
    tableBody,
    TableFooterDom
  },
  created() {},
  mounted() {
    if (this.$children.length > 0) {
      for (let i = 0; i < this.$children.length; i++) {
        if (this.$children[i].$options._componentTag == "kz-table-col") {
          this.childData.push(this.$children[i].$options.propsData);
          this.childColComponent.push(this.$children[i]);
        }
        if(this.$children[i].$options._componentTag == "kz-table-foot"){
          this.footComponent=this.$children[i]
        }
      }
    }
  }
 
};
</script>

<style >
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track-piece {
  background-color: #cccccc;
  -webkit-border-radius: 6px;
}
::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: #999999;
  -webkit-border-radius: 6px;
}
::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: #999999;
  -webkit-border-radius: 6px;
}
.kz-basic-table-container {
  position: relative;
  border-radius: 3px;
  background: #ffffff;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  overflow: auto;
  padding-bottom:20px; 
}
.kz-basic-table {
  min-width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  
}
.kz-basic-table thead,
.kz-basic-table tbody {
  font-size: 12px;
}
.kz-basic-table thead th,
.kz-basic-table tbody tr {
  border: 1px solid #ddd;
}
.kz-basic-table tbody tr:hover{
      background: rgb(222, 244, 253);
}
.kz-basic-table thead th {
  padding: 0 2px;
  height: 35px;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  font-weight: 700;
  background-color: #f5f5f5;
  color: #676a6c;
}
.kz-basic-table tbody tr td {
  text-align: center;
  border-right-width: 1px;
  border-right-color: #e7e7e7;
  border-right-style: solid;
  word-break: break-all;
  word-wrap: break-word;
  height: 40px;


}
.kz-basic-table .kz-fit{
  width: 100%;height: 100%;
   display: inline-block;
   line-height:40px;
}

</style>
