//该文件专门用以窗口整个应用的路由器

//引入vue-router
import VueRouter from 'vue-router'

//引入相关组件
import ToAbout from '../pages/ToAbout'
import ToHome from '../pages/ToHome'
import ToNews from '../pages/ToNews'
import ToMessage from '../pages/ToMessage'
import DeTail from '../pages/DeTail'

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            //命名路由
            name: 'ab',
            path: '/about',
            component: ToAbout
        },
        {
            path: '/home',
            component: ToHome,
            children: [
                {
                    path: 'news',
                    component: ToNews
                },
                {
                    path: 'message',
                    component: ToMessage,
                    children: [
                        {
                            //命名路由
                            name: 'dt',
                            path: 'detail',
                            component: DeTail
                        }
                    ]
                }
            ]
        }
    ]
})