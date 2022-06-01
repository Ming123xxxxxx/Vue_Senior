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
    routes: [
        {
            //命名路由
            name: 'ab',
            path: '/about',
            component: ToAbout,
            meta: { title: '关于' }
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
                    meta: { isAuth: true, title: '新闻' },
                    //独享共享守卫只能配置beforeEnter,也就是前置守卫
                    beforeEnter:(to,next) => {
                        if (to.meta.isAuth) {
                            //如果localStorage中的school为rcez则可以放行,否则拦截
                            if (localStorage.getItem('school') === 'rcez') {
                                next()
                            } else {
                                alert("localStorage中的school不对,禁止查看")
                            }
                        } else {
                            //若不是则放行
                            next()
                        }
                    }
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