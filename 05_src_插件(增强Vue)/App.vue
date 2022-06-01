<template>
    <div>
        <StudentName></StudentName>
        <SchoolName></SchoolName>
    </div>
</template>

<script>
    import StudentName from './components/StudentName'
    import SchoolName from './components/SchoolName'

    export default {
        components: {
            StudentName,
            SchoolName
        }
    }
</script>