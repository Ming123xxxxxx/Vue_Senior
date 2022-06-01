<template>
    <ul>
        <li>消息编号:{{id}}</li>
        <li>消息标题:{{title}}</li>
    </ul>
</template>

<script>

    export default {
        name:"DeTail",
        //接收来自路由传递的参数
        props:['id','title']
    }
</script>