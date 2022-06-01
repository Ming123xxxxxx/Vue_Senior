import Vue from 'vue'
import App from "./App.vue"

//安装全局事件总线(第一种写法)
// const Demo = Vue.extend({})

// const d = new Demo()

// Vue.prototype.$bus = d

new Vue({
    el:"#root",
    components:{
        App
    },
    render: h => h(App),
    //安装全局事件总线(第二种写法)
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})