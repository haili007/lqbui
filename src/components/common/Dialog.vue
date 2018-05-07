<template>
<div v-show="visible" class="kz-dialog">
    <div :style="'width:'+width" class="kz-dialog-content">
      <div v-if="$slots.title" class="kz-dialog-header">
          <slot name="title"></slot>
          <span @click="handlerClose" class="kz-dialog-close " >
            <i @mouseover="color='#e4e4e4'" @mouseout="color='#666666'" :style="'color:'+color" class="iconfont icon-guanbi"></i>
          </span>
      </div>
      <div class="kz-dialog-body" >
          <slot></slot>
      </div>
      <div class="kz-dialog-footer" >
          <slot name="footer"></slot>
      </div>
    </div>
    <div class="kz-mask"></div>
</div>
</template>

<script>
export default {
  name: "kz-dialog",
  data() {
    return {
      color: "#666666"
    };
  },
  props: {
    width: {
      type: String
    },
    visible: {
      type: Boolean,
      default: false
    },
    beforeClose: {
      default: null
    }
  },
  methods: {
    handlerClose(e) {
      if (this.beforeClose) {
        this.beforeClose(e);
      }else{
          alert("你点击了关闭按钮")
      }
    }
  }
};
</script>

<style>
.kz-dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
}
.kz-dialog-content {
  position: relative;
  margin: 0 auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  margin-top: 15vh;
  z-index: 2020;
  width: 50%;
}

.kz-dialog-header {
  padding: 20px;
  padding-bottom: 10px;
}
.kz-dialog-body {
  padding: 30px 20px;
  color: #606266;
  line-height: 24px;
  font-size: 14px;
}
.kz-dialog-footer {
  padding: 20px;
  padding-top: 10px;
  text-align: right;
  box-sizing: border-box;
}

.kz-dialog-close {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
}
.kz-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
  z-index: 2019;
}
</style>
