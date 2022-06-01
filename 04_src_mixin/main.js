import Vue from 'vue'
import App from './App.vue'

//引入一个混合（全局,所有组件都能使用）
import { mixin, mixin2 } from './mixin.js'
Vue.mixin(mixin)
Vue.mixin(mixin2)

new Vue({
    el: "#root",
    components: {
        App
    },
    render: h => h(App),
})