import App from './App'
import Vue from 'vue'

new Vue({
    el:"#root",
    components:{
        App
    },
    render: h => h(App)
})