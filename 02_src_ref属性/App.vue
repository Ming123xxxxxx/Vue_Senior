<template>
    <div>
        <button @click="showInfo">点我输出以下的元素</button>
        <h1 v-text="msg" ref="title"></h1>
        <StudentName ref="Stu"/>
            <SchoolName/>
                <SchoolName/>
                    <SchoolName/>
    </div>
</template>

<script>

    import SchoolName from './components/SchoolName.vue'
    import StudentName from './components/StudentName.vue'

    export default {
        name: "App",
        data() {
            return {
                msg:"Thanks To Use Vue",
                DocumentElement:''
            };
        },
        methods:{
            showInfo(){
                console.log(this.$refs.title)
                console.log(this.$refs.Stu)
            }
        },
        components: {
            SchoolName,
            StudentName
        }
    }
</script>