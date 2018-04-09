<style scoped>
.lqbui-side {
  position: fixed;
  top: 50px;
  bottom: 0;
  z-index: 99;
  width: 160px;
  overflow-x: hidden;
}
.lqbui-bg-black {
  background-color: #393d49 !important;
}
.lqbui-side-scroll {
  width: 180px;
  height: 100%;
  overflow-x: hidden;
}
.lqbui-nav-tree {
  position: relative;
  background-color: #393d49;
  color: #fff;
  border-radius: 2px;
  font-size: 0;
  box-sizing: border-box;
  width: 160px;
  padding: 0;
}
.lqbui-nav-tree * {
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s;
  -moz-transition: all 0.3s; /* Firefox 4 */
  -webkit-transition: all 0.3s; /* Safari 和 Chrome */
  -o-transition: all 0.3s; /* Opera */
}

.lqbui-nav-item {
  line-height: 40px;
  display: block;
  width: 100%;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 1px;
}

.lqbui-nav-tree .lqbui-nav-item a {
  height: 45px;
  line-height: 45px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 20px;
  color: #fff;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
}
.lqbui-nav-child {
  left: 0;
  top: 65px;
  min-width: 100%;
  line-height: 36px;
  padding: 5px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  border: 1px solid #d2d2d2;
  z-index: 100;
  border-radius: 2px;
  white-space: nowrap;
  position: relative;
  z-index: 0;
  top: 0;
  border: none;
  box-shadow: none;
}
.lqbui-nav-title {
  display: block;
  background: rgba(177, 178, 179, 0.3);
  cursor: pointer;
  box-shadow: 12px 3px 5px rgba(1, 1, 1, 0.2);
}
.lqbui-nav-title:hover {
  background: rgba(177, 178, 179, 0.1);
}
.lqbui-nav-tree .lqbui-nav-child {
  margin: 0;
}
.lqbui-nav-tree .lqbui-nav-child a {
  height: 40px;
  line-height: 40px;
  color: #fff;
  color: rgba(255, 255, 255, 0.7);
}
.lqbui-nav-tree .lqbui-nav-child a:hover {
  color: #ffffff;
}
.lqbui-nav-icon {
  position: absolute;
  right: 10px;
  top: 0px;
}
</style>
<template>
  <div class="lqbui-side lqbui-bg-black"> 
   <div class="lqbui-side-scroll"> 
    <ul class="lqbui-nav-tree"> 
     <li :key="index" v-for="(item,index) in menu" class="lqbui-nav-item"> 
            <span @click='toggleFold(index)' class="lqbui-nav-title">
            <a :style="(locPath==item.path.replace(' ',''))?'color: #72feff':''"  :href="item.path">{{item.name}}</a><span v-if="item.child.length" :class="'lqbui-nav-icon icon iconfont '+(item.fold?'icon-shangjiantou':'icon-xiajiantou')"></span>
            </span> 
            <dl v-show="item.fold" v-if="item.child.length" class="lqbui-nav-child"> 
            <dd :key="index1" v-for="(item1,index1) in item.child" > 
                <a :style="(locPath==item1.path.replace(' ',''))?((item.fold=true)&&'color: #72feff'):''" :href="item1.path">{{item1.name}}</a> 
            </dd>  
            </dl> 
      </li> 
    </ul> 
   </div> 
  </div>
</template>

<script>
import utils from "../../lib/utils.js";
import fn from "../../lib/fn.js";
let ajax = require("ajax");
(window.userInfo = window.userInfo || {}), //userId, systemId, auth_token, sso_token
  (window.auth_token = ""),
  (window.systemId = "");
export default {
  props: ["test", "fold"],
  data() {
    return {
      menu: [],
      defalut: false,
      locPath:
        location.pathname + location.hash == "/"
          ? "/entreprise.html"
          : location.pathname + location.hash
    };
  },
  mounted() {
    let _this = this;
    if (this.test) {
      userInfo = {};
      this.menu = this.setMenuData([
        {
          id: 18,
          systemId: 29,
          parentId: 0,
          name: "栏目一",
          nickname: "栏目一",
          description: "栏目一",
          path: "#/entreprise.html",
          icon: "",
          sort: 0,
          createTime: "2017-10-09 11:03:32",
          updateTime: "2017-10-09 14:46:56",
          flag: "1",
          rootId: 0,
          functionList: null
        },
        {
          id: 20,
          systemId: 29,
          parentId: 0,
          name: "栏目二",
          nickname: "栏目二",
          description: "栏目二",
          path: "#/property_all.html",
          icon: "",
          sort: 0,
          createTime: "2017-10-09 15:29:18",
          updateTime: "2017-11-09 13:20:29",
          flag: "1",
          rootId: 0,
          functionList: null
        },
        {
          id: 21,
          systemId: 29,
          parentId: 0,
          name: "栏目三",
          nickname: "栏目三",
          description: "栏目三",
          path: "#/property_bag.html",
          icon: "",
          sort: 1,
          createTime: "2017-10-09 15:29:46",
          updateTime: "2017-10-24 17:02:04",
          flag: "1",
          rootId: 0,
          functionList: null
        },
        {
          id: 78,
          systemId: 29,
          parentId: 20,
          name: "子栏目",
          nickname: "子栏目",
          description: "子栏目",
          path: "#/property.html",
          icon: "",
          sort: 0,
          createTime: "2017-10-24 16:15:46",
          updateTime: "2017-11-09 13:20:46",
          flag: "1",
          rootId: 0,
          functionList: null
        }
      ]);
    } else {
      this.getUserMenu();
    }
    window.addEventListener("popstate", function() {
      _this.locPath =
        location.pathname + location.hash == "/"
          ? "/entreprise.html"
          : location.pathname + location.hash;
    });
  },
  methods: {
    setMenuData(data) {
      let menu = [],
        temp = {};
      for (let k = 0; k < data.length; k++) {
        data[k].fold = this.fold ? this.fold : this.defalut;
        if (data[k].parentId == 0 || !temp[data[k].parentId]) {
          menu.push(data[k]);
          temp[data[k].id] = data[k];
          temp[data[k].id].child = [];
        } else {
          temp[data[k].parentId].child.push(data[k]);
        }
      }
      return menu;
    },
    getUserMenu() {
      var _this = this;
      userInfo =
        utils.getItem("userInfo") && JSON.parse(utils.getItem("userInfo"));
      if (userInfo) {
        auth_token = userInfo.auth_token;
        systemId = userInfo.systemId;
        ajax.get(
          fn.urlAuth +
            "ams/api/user/getUserMenus/" +
            userInfo.userId +
            "/" +
            userInfo.systemId +
            "?auth_token=" +
            userInfo.auth_token, // 跳转到 action
          {},
          function(res) {
            _this.$emit("isload");
            if (!res) {
              console.log("异常！");
              return;
            }
            if (res.code == 200) {
              console.log("菜单目录：", res);
              _this.menu = _this.setMenuData(res.data);
            } else {
              if ((res.code = "A400600")) {
                location.href = fn.localUrl + "/ams/login.html";
              }
              try {
                fn.commonWindowWarn(res.message);
              } catch (error) {
                alert(res.message);
              }
            }
          }
        );
      } else {
        //登录页面地址
        location.href = fn.localUrl + "/ams/login.html";
      }
    },
    toggleFold(i) {
      this.menu[i].fold = !this.menu[i].fold;
    }
  }
};
</script>


