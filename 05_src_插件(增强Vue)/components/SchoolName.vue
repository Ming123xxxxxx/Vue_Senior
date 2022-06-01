
<template>
    <div class="demo">
        <h2>学校名称:{{SName  | mySlice}}</h2>
        <h2 @click="showAddress">学校地址:{{SAddress}}</h2>
        <button @click="hello">点我</button>
    </div>
</template>


<script>

    export default {
        name: 'SchoolName',
        data() {
            return {
                SName: "瑞昌二中xxxx",
                SAddress: "瑞昌市"
            }
        },

        methods: {
            showAddress() {
                alert("学校地址"+this.SAddress)
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