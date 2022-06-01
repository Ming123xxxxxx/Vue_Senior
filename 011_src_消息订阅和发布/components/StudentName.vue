<!--组件的结构-->
<template>
    <div class="student">
        <h2>学生名称:{{SName}}</h2>
        <h2>学生年龄:{{SAge}}</h2>
        <button @click="sendSchool">把学生名字给SchoolName(兄弟间通信)</button>
    </div>
</template>

<script>

    //引入pubsub
    import pubsub from 'pubsub-js'

    //暴露组件
    export default {
        name: 'StudentName',
        data() {
            return {
                SName: "Ming",
                SAge: 22,
            }
        },
        methods: {
            sendSchool() {
              //发布消息
          pubsub.publish('hello',this.SName)
            }
        },
    }
</script>

<!--组件的样式-->
<style>
    .student {
        background-color: aqua;
        padding: 10px;
        margin-top: 30px;
    }
</style>