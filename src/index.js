import Frame from './components/Frame.vue';
import FrameWarp from './components/FrameWarp.vue';
import Card from './components/common/Card.vue';
let lgbui={Frame,Card,FrameWarp}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('lqb-frame', Frame);
  window.Vue.component('lqb-card', Card);
  window.Vue.component('lqb-frame-warp', FrameWarp);
}
export default lgbui;

