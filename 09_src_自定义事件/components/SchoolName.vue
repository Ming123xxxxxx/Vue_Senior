<template>
    <div class="school">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="ns">把学校名给App组件</button>
    </div>
</template>

<script>
    export default {
        name:"SchoolName",
        data() {
            return {
                name:"瑞昌一中",
                address:"瑞昌市"
            }
        },
        methods: {
            ns(){
                this.getSchoolName(this.name)
            }
        },
        props:['getSchoolName']
    }
</script>

<style scoped>
    .school{
        background-color: yellow;
        padding: 10px;
        margin-top: 30px;
    }
</style>