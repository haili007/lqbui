<style scoped>
.lqbui-main-header * {
  list-style: none;
  font-size: 14px;
}
.lqbui-main-header {
  background-color: #3c8dbc;
  height: 50px;
  box-shadow: 12px 3px 5px rgba(1, 1, 1, 0.2);
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0px;
}

.lqbui-logo {
  display: block;
  float: left;
  padding: 7px 20px;
  background-color: #367fa9;
}

.lqbui-logo .lqbui-logo-lg img {
  vertical-align: middle;
}
.lqbui-navbar-custom-menu {
  float: right;
}

.lqbui-nav li {
  float: right;
}
.lqbui-user-menu a {
  color: #ffffff;
  line-height: 20px;
  cursor: pointer;
  padding: 15px;
  display: block;
}
.lqbui-user-menu a:hover {
  background: rgba(0, 0, 0, 0.1);
}
.lqbui-user-image {
  float: left;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: -2px;
}
</style>
<template>
  <header class="lqbui-main-header">
            <a href="/" class="lqbui-logo">
                <span class="lqbui-logo-lg">
                    <img src="https://www.baidu.com/img/baidu_jgylogo3.gif" title="logo">
                </span>
            </a>
            <div class="lqbui-navbar-custom-menu">
                  <ul class="lqbui-nav lqbui-navbar-nav">
                      <li class="lqbui-user-menu">
                          <a @click="loginout" >
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRTI2N0M3MEY3RkQxMUU2OTM1RkI5MDk2NjhGQjk1MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRTI2N0M3MUY3RkQxMUU2OTM1RkI5MDk2NjhGQjk1MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFFMjY3QzZFRjdGRDExRTY5MzVGQjkwOTY2OEZCOTUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFFMjY3QzZGRjdGRDExRTY5MzVGQjkwOTY2OEZCOTUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+lpHniQAACw9JREFUeNpMV1lsXOUZ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" class="lqbui-user-image" alt="User Image">
                              <span class="hidden-xs">登出</span>
                          </a>
                      </li>
                      <li v-if="enterpriseList" style="line-height: 50px;">
                            <select class="commonInput" v-model="id" @change="setEnterpriseId">
                                <option  :key="index"  v-for="(item, index) in enterpriseList" :value="item.id ">{{item.enterpriseName}}</option>
                            </select>
                        </li>
                  </ul>
              </div>
           
    </header>
</template>

<script>
import utils from "../../lib/utils.js";
import fn from "../../lib/fn.js";
export default {
  data() {
    return {
        id:""
    };
  },
  watch:{
      faultCom(val,oval){
          if(val!=oval){
              this.id=val;
          }
      }
  },
  props: ["enterpriseList", "faultCom"],
  methods: {
    loginout(e) {
      e.preventDefault();
      e.stopPropagation();
      utils.removeItem("userInfo");
      alert("退出登录")
    },
    setEnterpriseId(e) {
      this.$emit("changecompont", e.target.value);
    }
  },
  mounted() {}
};
</script>


