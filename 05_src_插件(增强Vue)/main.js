import Vue from 'vue'
import App from './App.vue'

//引入插件
import plugins from './plugins'
//使用插件
Vue.use(plugins)

new Vue({
    el: "#root",
    components: {
        App
    },
    render: h => h(App),
})