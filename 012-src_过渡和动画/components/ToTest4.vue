<template>
    <div>
        <button @click="isShow =!isShow">显示/隐藏</button>
        <transition-group 
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__headShake"
        leave-active-class="animate__backOutRight"
        >
            <h1 key="1" v-show="isShow">Hello,Vue</h1>
            <h1 key="2" v-show="isShow">Hello,World</h1>
            </transition-group>
    </div>
</template>

<script>

    //引入样式
    import 'animate.css'

    export default {
        name: "ToTest3",
        data() {
            return {
                isShow: true
            }
        },
    }
</script>

<style scoped>
    h1 {
        background-color: darkseagreen;
    }
</style>