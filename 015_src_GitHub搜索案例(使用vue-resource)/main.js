import Vue from 'vue'
import App from './App'

//引入插件
import vueResource from 'vue-resource'
//使用插件
Vue.use(vueResource)

new Vue({
    el: "#root",
    components: {
        App
    },
    beforeCreate(){
        Vue.prototype.$bus = this
    },
    render: h => h(App)
})