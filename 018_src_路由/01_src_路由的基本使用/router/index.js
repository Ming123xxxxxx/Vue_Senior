//该文件专门用以窗口整个应用的路由器

//引入vue-router
import VueRouter from 'vue-router'

//引入相关组件
import ToAbout from '../pages/ToAbout'
import ToHome from '../pages/ToHome'

//创建并暴露一个路由器
export default new VueRouter ({
    routes: [
        {
            path: '/about',
            component: ToAbout
        },
        {
            path: '/home',
            component: ToHome
        }
    ]
})