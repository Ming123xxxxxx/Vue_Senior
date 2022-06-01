import Vue from 'vue'
import App from './App'
//引入store
import store from './store'



new Vue({
    el:"#root",
    components:{
        App
    },
    store,
    render: h => h(App)
})