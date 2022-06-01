<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
        </div>
        <button @click="toback">后退</button>
        <button @click="toforward">前进</button>
        <button @click="togo">测试router中的go</button>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "ToBanner",
        methods: {
            toback() {
                //后退一步
                this.$router.back()
            },
            toforward() {
                //前进一步
                this.$router.forward()
            },
            togo() {
                //go()中参数为-x代表后退x步,x则表示前进x步
                this.$router.go(-2)
            }
        }
    }
</script>

<style scoped>
    button {
        margin-bottom: 20px;
        margin-left: 25px;
    }
</style>