<template>
<div>
  <div class="lqbui-layout">
      <lqb-aside  @isload="loaded"  :test="test" :fold="fold" :current-position="currentPosition" @left-change="leftChange" :toggle="toggle"></lqb-aside>
      <lqb-head   @tab-change="tabChange" @changecompont="changecompont" @changestyle="changestyle" :enterprise-list="enterpriseList" :fault-com="faultCom" :nav-list="navList" :current-position="currentPosition"></lqb-head>
        <div class="lqbui-content" :style="'left:'+left+'px'">
            <slot></slot>
        </div>   
  </div>
</div>
   
</template>

<script>
import Aside from "./common/Aside.vue";
import Head from "./common/Head.vue";
export default {
  name:"lqb-frame",
  data() {
    var validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("业务类型名称不能为空"));
      }
      const reg = /^[a-zA-Z\u4e00-\u9fa5]{2,15}$/g;
      if (reg.test(value) === false) {
        callback(new Error("长度必须为2~15个字符，不包含数字或特殊字符"));
      } else {
        callback();
      }
    };
    return {
      load: true,
      left:180,
      toggle:false
    };
  },
  props: ["test", "fold", "enterpriseList", "faultCom","navList","currentPosition"],
  components: {
    "lqb-aside": Aside,
    "lqb-head": Head
  },
  beforeCreate() {
    var head = document.getElementsByTagName("HEAD").item(0);
    var style = document.createElement("link");
     style.href = "https://at.alicdn.com/t/font_469943_yzavdx9ptjcbx1or.css";
    style.rel = "stylesheet";
    style.type = "text/css";
    head.appendChild(style);
  },
  mounted() {},
  methods: {
    loaded() {
      this.load = false;
    },
    changecompont(i) {
      console.log(i);
      this.$emit("changecompont", i);
    },
    changestyle(i){
      console.log(i);
      this.$emit("changestyle", i);
    },
    tabChange(index){
        console.log(index);
        this.$emit('tab-change', index)
    },
    leftChange(leftMsg){
      console.log(leftMsg);
      this.left=leftMsg.left;
      this.toggle=leftMsg.toggle;
    }
  }
};
</script>
<style >
* {
  margin: 0;
  padding: 0;
}
.lqb-afclear {
  zoom: 1;
}
.lqb-afclear:after {
  content: "\20";
  display: block;
  height: 0;
  clear: both;
}
.lqbui-content {
  
    margin-left: 180px;
    margin-top: 50px;
}
</style>
