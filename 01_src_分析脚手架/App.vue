<!--组件的结构-->
<template>
   <div>
       <SchoolName></SchoolName>
       <StudentName></StudentName>
   </div>
</template>

<!--组件交互相关的代码(数据、方法等)-->
<script>

    //引入组件
    import SchoolName from './components/SchoolName.vue'
    import StudentName from './components/StudentName.vue'

    //暴露组件
    export default {
        name: 'App',
        //注册组件(局部)
        components: {
            SchoolName,
            StudentName
        }
    }
</script>
