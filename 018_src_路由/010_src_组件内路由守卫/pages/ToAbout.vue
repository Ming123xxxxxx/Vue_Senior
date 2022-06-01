<template>
    <h2>我是About的内容</h2>
</template>

<script>

    export default {
        name: "ToAbout",
        //通过路由规则,进入该组件时beforeRouteEnter被调用
        beforeRouteEnter(to, from, next) {
            console.log('beforeRouteEnter()....')
            if (to.meta.isAuth) {
                if (localStorage.school == 'rcez') {
                    next()
                    document.title = to.meta.title
                }else{
                    alert('localStorage中的school不正确')
                }
            } else {
                next()
            }
        },
        //通过路由规则,离开该组件时beforeRouteLeave被调用
        beforeRouteLeave(to, from, next) {
            console.log('beforeRouteLeave()....')
            next()
        }
    }

</script>