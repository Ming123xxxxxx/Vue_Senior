//该文件专门用以窗口整个应用的路由器

//引入vue-router
import VueRouter from 'vue-router'

//引入相关组件
import ToAbout from '../pages/ToAbout'
import ToHome from '../pages/ToHome'
import ToNews from '../pages/ToNews'
import ToMessage from '../pages/ToMessage'
import DeTail from '../pages/DeTail'

const router = new VueRouter({
    //mode设置工作模式
    mode:'history',
    routes: [
        {
            //命名路由
            name: 'ab',
            path: '/about',
            component: ToAbout,
            meta: { isAuth: true, title: '关于' }
        },
        {
            path: '/home',
            component: ToHome,
            meta: { title: '主页' },
            children: [
                {
                    path: 'news',
                    component: ToNews,
                    //isAuth为true表示该组件进行拦截
                    meta: { isAuth: true, title: '新闻' }
                },
                {
                    path: 'message',
                    component: ToMessage,
                    //isAuth为true表示该组件进行拦截
                    meta: { isAuth: true, title: "消息" },
                    children: [
                        {
                            name: 'dt',
                            path: 'detail',
                            component: DeTail,
                            props({ query }) {
                                return { id: query.id, title: query.title }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

export default router