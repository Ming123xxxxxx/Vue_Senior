import Vue from 'vue'
import App from './App'

//此方式为完整引入,会导致文件过大
//引入Element-ui组件库
// import ElementUI from 'element-ui';
//引入Element-ui全部样式
// import 'element-ui/lib/theme-chalk/index.css';
//使用Element-ui
// Vue.use(ElementUI)

//按需引入
import {Button,Row,DatePicker} from 'element-ui'
//使用对应组件,左侧为要使用的标签名(可改名),右侧为对应的样式
Vue.component('el-button',Button)
Vue.component('el-row',Row)
Vue.component('el-date-picker',DatePicker)


new Vue({
    el:"#root",
    components:{
        App
    },
    render: h => h(App)
})