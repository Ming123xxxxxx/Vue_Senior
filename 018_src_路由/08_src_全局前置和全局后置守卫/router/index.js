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

//全局前置路由守卫--初始化的时候和每次路由切换之前被调用
router.beforeEach((to, from, next) => {

    console.log("前置路由守卫。。。")

    //若请求路径为home下的组件则进行拦截(按路径进行拦截)
    // if(to.path == '/home/message' || to.path == '/home/news'){

    //如果路由meta中的isAuth为true,则进行拦截(按路由上的属性进行拦截)
    if (to.meta.isAuth) {
        //如果localStorage中的school为rcez则可以放行,否则拦截
        if (localStorage.getItem('school') == 'rcez') {
            next()
        } else {
            alert("localStorage中的school不对,禁止查看")
        }
    } else {
        //若不是则放行
        next()
    }

})

//全局后置路由守卫——--初始化的时候和每次路由切换之后被调用
router.afterEach((to) => {
    //访问'/'路径时将其页面标题命名
    if (to.path == '/') {
        document.title = 'vue_test'
    } else {
    //点击对应组件将页面标题修改成对应内容
        document.title = to.meta.title
    }
})

export default router