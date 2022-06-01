<template>
    <div class="school">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>

    //引入pubsub
    import pubsub from 'pubsub-js'

    export default {
        name: "SchoolName",
        data() {
            return {
                name: "瑞昌一中",
                address: "瑞昌市",
                PubId:''
            }
        },
        mounted() {
            //订阅消息,通过返回值PubId才能关闭发布订阅
            //第二个参数中函数中的第一个参数msg为消息名,第二个参数data为发送的消息内容
             this.PubId = pubsub.subscribe('hello', (msg, data) => {
                console.log("消息回调执行...", msg, data)
            })
        },
        //当此组件销毁则取消订阅
        beforeDestroy() {
            pubsub.unsubscribe(this.PubId)
        },
    }
</script>

<style scoped>
    .school {
        background-color: yellow;
        padding: 10px;
        margin-top: 30px;
    }
</style>