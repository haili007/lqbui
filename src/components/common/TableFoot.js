import Vue from "vue";
import { width } from "window-size";
export default {
  name: "kz-table-foot",
  data() {
    return {
    
    }
  },
  props: {
   
  },
  mounted() {
  },
  methods: {
    renderCell(h, data) {
      console.log(222222)
        let slotsDefault = (this.$scopedSlots.default ? this.$scopedSlots.default : this.$slots.default) || null;
        var isEdit = false;
        if (slotsDefault) {
          return (typeof slotsDefault == "function") ? slotsDefault(data) : slotsDefault
        }else
        {
          return <div></div>
        }
    },

  }, render(h) {
    return <div></div>
  }
}