<template>
   <div>
    <SchoolName/>
    <StudentName/>
   </div>
</template>

<script>
    import SchoolName from './components/SchoolName.vue'
    import StudentName from './components/StudentName.vue'

    export default {
        name:"App",
        components:{
            SchoolName,
            StudentName
        }
    }
</script>
