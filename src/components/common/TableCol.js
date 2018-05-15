import Vue from "vue";
import { width } from "window-size";
export default {
  name: "kz-table-col",
  data() {
    return {
      position: 0,
      editState: [],
    }
  },
  props: {
    label: {},
    prop: {},
    type: {

    },
    edit: {
      type: Boolean,
      default: false
    },
    defaultKeydown:{
      type: Boolean,
      default: false
    }
  },
  mounted() {

  },
  methods: {
    sync(data, prop, value) {
      data[prop] = value
    },
    tabNext(compent) {
      if (compent.next) {
        Vue.set(compent.next.editState, compent.rowNum, true);
        //e.preventdefault();
       // console.log(compent.next.prop,compent.rowNum,document.getElementById("editState" + compent.next.prop + compent.rowNum));
        setTimeout(() => {
          try {
            document.getElementById("editState" + compent.next.prop + compent.rowNum).focus();
           } catch (e) { }
        }, 1)
      }
    },
    handlerClick(counts){
      Vue.set(this.editState, counts, true);
      setTimeout(() => {
        try { document.getElementById("editState" + this.prop + counts).focus(); } catch (e) { }
      }, 1) 
    },
    handlerKeydown(e,data){
      if (this.defaultKeydown) {
        this.$emit("keydown", { event: e, next: data.nextCompent,tabNext:this.tabNext });
        return ;
      }
      let nextCompent = data.nextCompent;
      if (e.code == "Tab") {
        this.tabNext(nextCompent)
      }
    },
    handlerEnd(e,data){
      Vue.set(this.editState, data.counts, false);
    },
    renderCell(h, data, call) {
      let cells = () => {
        let slotsDefault = (this.$scopedSlots.default ? this.$scopedSlots.default : this.$slots.default) || null;
        var isEdit = false;
        if (this.type == "index") {
          return data.counts + 1
        } else if (this.type == "selected") {
          return <input value={data.counts} on-click={(e) => {
            call({ value: data.counts, checked: e.target.checked })
          }} type="checkbox" checked={data.selects.indexOf(data.row) > -1} />
        } else if (slotsDefault) {
          return (typeof slotsDefault == "function") ? slotsDefault(data) : slotsDefault
        } else {
          if (this.edit && this.editState[data.counts]) {
            return <span >
              <input style={
                {
                  width: "96%",
                  height: "98%",
                  textAlign: "center"
                }
              }
                id={"editState" + this.prop + data.counts}
                on-blur={(e) => {
                  this.handlerEnd(e,data)
                }}
                on-keydown={(e) => {
                  this.handlerKeydown(e,data)
                }}
                on-input={(e) => this.sync(data.row, this.prop, e.target.value)}
                value={data.row ? data.row[this.prop] : ""} />
            </span>
          } else {
            return <span class={"kz-fit"} on-click={
              (e) => {
                this.handlerClick(data.counts)
              }
            }>
              {data.row ? data.row[this.prop] : null}
            </span>
          }

        }
      }
      if (this.width && data.counts == 0) {
        return <td>
          {cells()}
        </td>
      }
      else {
        return <td>
          {cells()}
        </td>
      }
    },

  }, render(h) {
    return <div></div>
  }
}