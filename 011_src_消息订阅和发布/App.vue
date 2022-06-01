<template>
    <div class="app">
          <h2>{{msg}}</h2>
          <SchoolName/>
          <StudentName/>
    </div>
</template>

<script>
    import SchoolName from './components/SchoolName.vue'
    import StudentName from './components/StudentName.vue'

    export default {
        name: "App",
        data() {
            return {
                msg:"Hello,Vue"
            }
        },
        components: {
            SchoolName,
            StudentName
        }
    }
</script>

<style>
    .app {
        background-color: brown;
        padding: 10px;
    }
</style>