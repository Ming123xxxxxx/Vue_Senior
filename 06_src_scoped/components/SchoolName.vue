<template>
    <div class="demo">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
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
        }
    }
</script>

<style scoped>
    .demo{
        background-color: yellow;
    }
</style>