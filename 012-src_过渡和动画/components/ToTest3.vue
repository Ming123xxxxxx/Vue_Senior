<template>
    <div>
        <button @click="isShow =!isShow">显示/隐藏</button>
        <transition-group name="hello" appear>
            <h1 key="1" v-show="isShow">Hello,Vue</h1>
            <h1 key="2" v-show="isShow">Hello,World</h1>
            </transition-group>
    </div>
</template>

<script>
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

    .hello-enter-active {
        animation: go 1s;
    }

    .hello-leave-active {
        animation: go 1s reverse;
    }

    @keyframes go {
        from {
            transform: translateX(-100%);
        }

        to {
            transform: translateX(0px);
        }
    }
</style>