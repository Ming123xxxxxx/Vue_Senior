<template>
    <div class="app">
        <h2>学校名:{{scname}}</h2>
        <h2>学生名:{{stname}}</h2>
        <!--通过父组件给子组件传递函数类型的props实现:子组件给父组件传值-->
        <SchoolName @click.native="nt" :getSchoolName="getSchoolName" />
        <!--通过父组件给子组件绑定一个自定义事件实现:子组件给父组件传值(第一种写法,使用@或v-on)-->
        <StudentName v-on:customvc="demos" @dp="constp" @unall="unallthing"/>
        
        <!--通过父组件给子组件绑定一个自定义事件实现:子组件给父组件传值(第二种写法,使用ref)-->
        <!-- <StudentName ref="students" /> -->
    </div>
</template>

<script>
    import SchoolName from './components/SchoolName.vue'
    import StudentName from './components/StudentName.vue'

    export default {
        name: "App",
        data() {
            return {
                scname: "",
                stname:''
            }
        },
        methods: {
            getSchoolName(value) {
                console.log("学校名字:", value)
                this.scname=value
            },
            demos(value) {
                console.log("学生名:",value)
                this.stname=value
            },
            constp(){
                console.log("constp()...")
            },
            unallthing(){
                console.log("unallthing()...")
            },
            nt(){
                alert("原生事件")
            }
        },
        components: {
            SchoolName,
            StudentName
        },
        //第二种自定义组件事件的写法
        // mounted() {
        //     this.$refs.students.$on('customvc',this.demos)//绑定自定义事件
        //     //this.$refs.students.$once('customvc',this.demos)//绑定自定义事件(事件只能触发一次)
        // },
    }
</script>

<style>
    .app {
        background-color: brown;
        padding: 10px;
    }
</style>