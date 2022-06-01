<!--组件的结构-->
<template>
    <div class="student">
        <h2>学生名称:{{SName}}</h2>
        <h2>学生年龄:{{SAge}}</h2>
        <h2>编号:{{numbers}}</h2>
        <button @click="add">编号++(StudentName销毁后仍可执行)</button><br><br>
        <button @click="getStudentName">把学生名给App组件并执行App组件中的constp()</button><br><br>
        <button @click="unbind">解绑customvc事件(只适合用于解绑一个事件)</button><br><br>
        <button @click="unbindmult">解绑事件(适合用于解绑多个事件)</button><br><br>
        <button @click="unbindall">解绑所有事件</button><br><br>
        <button @click="death">删除StudentName组件(组件上的自定义事件也会随之销毁)</button>    
    </div>
</template>

<script>


    //暴露组件
    export default {
        name: 'StudentName',
        data() {
            return {
                SName: "Ming",
                SAge: 22,
                numbers:0
            }
        },
        methods: {
            add() {
                console.log("add()...")
                this.numbers++
            },
            getStudentName() {
                //触发StudentName组件实例上的customvc事件，并将名字传给App组件
                this.$emit('customvc', this.SName)
                this.$emit('dp')
                this.$emit('unall')
            },
            unbind() {
                this.$off('customvc') //只适合用于解绑一个事件
            },
            unbindmult() {
                this.$off(['customvc','dp']) //只适合用于解绑多个事件
            },
            unbindall() {
                this.$off() //解绑所有事件
            },
            death(){
                this.$destroy() //销毁当前StudentName组件的实例,销毁后Student上的所有自定义事件也会随之销毁
            }
        },
    }
</script>

<!--组件的样式-->
<style>
    .student {
        background-color: aqua;
        padding: 10px;
        margin-top: 30px;
    }
</style>