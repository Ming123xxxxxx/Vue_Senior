<!--组件的结构-->
<template>
    <div>
        <h2>学生名称:{{StudentName}}</h2>
        <h2>学生年龄:{{StudentAge}}</h2>
    </div>
</template>

<!--组件交互相关的代码(数据、方法等)-->
<script>

    //暴露组件
    export default {
        name:'StudentName',
        data(){
            return{
                StudentName: "Ming",
                StudentAge: 22
            }
        }
    }
</script>
