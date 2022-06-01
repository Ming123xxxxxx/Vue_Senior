
<template>
    <div class="demo">
        <h2>学生名称:{{SName  | mySlice}}</h2>
        <h2 @click="showAddress">学生年龄:{{SAge}}</h2>
        <input type="text" v-fbind:value="SName">
    </div>
</template>

<script>

    export default {
        name: 'StudentName',
        data() {
            return {
                SName: "Mingxxxxxx",
                SAge:22
            }
        },
        methods: {
            showAddress() {
                alert("学生年龄"+this.SAge)
            }
        }
    }
</script>

<style>
    .demo {
        font-weight: 800;
        font-family: "Bernard MT Condensed";
        color: aqua;
    }
</style>