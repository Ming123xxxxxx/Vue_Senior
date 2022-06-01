import Vue from 'vue'
import App from './App'
//引入vue-router
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//使用vue-router
Vue.use(VueRouter)

new Vue({
    el:"#root",
    components:{
        App
    },
    router:router,
    render: h => h(App)
})