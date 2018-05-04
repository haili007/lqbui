<template>
        <span class="kz-fit" @click="handlerEdit" v-clickoutside="handlerEnd" >
            <span  v-show="!eidt">{{inputValue}}</span>
            <span v-show="eidt">
                <kz-fuzzy style="width: 100%;height:100%" @change="handlerChange" @keydown="handlerKeydown" v-model="inputValue" :data="data" :filter="filter" :opts="opts">
                    <slot v-if="$slots.default"></slot>
                    <slot v-if="$slots.btn" slot="btn" name="btn"></slot>
                </kz-fuzzy>
            </span>
        </span>
</template>

<script>
import KzFuzzy from "./Fuzzy.vue";
import Clickoutside from "../../lib/clickoutside";
export default {
  name: "kz-editable-fuzzy",
  data() {
    return {
        eidt:false,
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
      default: []
    },
    filter: {
      type: Boolean,
      default: false
    }
  },
  components:{
      KzFuzzy
  },
  directives: { Clickoutside },
  mounted(){
  },
  methods:{
      handlerEdit(){
        this.eidt=true;  
        setTimeout(()=>{
            this.$children[0].$refs.sercheInput.focus();
        },1)
      },
      handlerEnd(){
          this.eidt=false;
      },
      handlerChange(e){
          this.$emit("change", {e:e,handlerEnd:this.handlerEnd});
      },
      handlerKeydown(e)
      {
           this.$emit("keydown", {e:e,handlerEnd:this.handlerEnd});
      }
  }
  
};
</script>

<style>

</style>
