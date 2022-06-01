<!--组件的结构-->
<template>
    <div class="demo">
        <h2>学校名称:{{SchoolName}}</h2>
        <h2>学校地址:{{SchoolAddress}}</h2>
        <button @click="showInfo">点我提示学校信息</button>
    </div>
</template>

<!--组件交互相关的代码(数据、方法等)-->
<script>

    //暴露组件
    export default {
        name:'SchoolName',
        data(){
            return{
                SchoolName: "瑞昌一中",
                SchoolAddress: "瑞昌市"
            }
        },
        methods:{
            showInfo(){
                alert("学校名称:",this.SchoolNamme)
            }
        }
    }
</script>

<!--组件的样式-->
<style>

    .demo{
        font-weight: 800;
        font-family: "Bernard MT Condensed";
        color: aqua;
    }
</style>