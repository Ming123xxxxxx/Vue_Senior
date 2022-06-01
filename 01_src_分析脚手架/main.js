
//引入Vue
import Vue from 'vue'

//引入App组件
import App from './App'

//创建vm实例
new Vue({
    el:"#root",
    template:`<App></App>`,
    //将App组件放入容器中
    render: h => h(App)
})