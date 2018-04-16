import Frame from './components/Frame.vue'
import FrameWarp from './components/FrameWarp.vue'
import Card from './components/common/Card.vue'
import Table from './components/common/Table.vue'
import TableCol from './components/common/TableCol.js'
let lgbui = { Frame, Card, FrameWarp,Table,TableCol }
const install = () => {
  for (let k in lgbui) {
    window.Vue.component(lgbui[k].name, lgbui[k]);
  }
}
(typeof window !== 'undefined' && window.Vue && install()) || (lgbui.install = install)
export default lgbui;

