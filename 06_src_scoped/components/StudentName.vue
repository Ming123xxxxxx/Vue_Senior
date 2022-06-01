<!--组件的结构-->
<template>
    <div class="demo">
        <h2>学生名称:{{SName}}</h2>
        <h2>学生年龄:{{SAge}}</h2>
    </div>
</template>

<script>


    //暴露组件
    export default {
        name: 'StudentName',
        data() {
            return {
                SName: "Ming",
                SAge:22
            }
        }
    }
</script>

<!--组件的样式-->
<style>
    .demo {
        font-weight: 800;
        font-family: "Bernard MT Condensed";
        color: aqua;
    }
</style>