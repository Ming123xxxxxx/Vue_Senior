import Vue from 'vue'
import App from './App'

new Vue({
    el:"#root",
    components:{
        App
    },
    beforeCreate(){
        Vue.prototype.$bus = this
    },
    render: h => h(App)
})