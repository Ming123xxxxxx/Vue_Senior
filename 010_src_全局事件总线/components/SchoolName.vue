<template>
    <div class="school">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name:"SchoolName",
        data() {
            return {
                name:"瑞昌一中",
                address:"瑞昌市"
            }
        },
        mounted() {
            //创建事件后接收兄弟组件StudentName发送的数据
            this.$bus.$on('hello',(data) => {
                console.log("SchoolName收到数据为:",data)
            })
        },
        //若此组件不使用,则将此组件上的事件解绑
        beforeDestroy() {
            this.$bus.$off('hello')
        }
    }
</script>

<style scoped>
    .school{
        background-color: yellow;
        padding: 10px;
        margin-top: 30px;
    }
</style>