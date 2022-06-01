<!--组件的结构-->
<template>
    <div class="demo">
        <h2>公共信息:{{msg}}</h2>
        <h2 @click="showName">学校名称:{{SName}}</h2>
        <h2 @click="showAddress">学校地址:{{SAddress}}</h2>
    </div>
</template>

<!--组件交互相关的代码(数据、方法等)-->
<script>

    //引入一个混合（局部,只有引入的组件才能使用）
    // import {mixin,mixin2} from '../mixin.js'

    //暴露组件
    export default {
        name: 'SchoolName',
        data() {
            return {
                SName: "瑞昌二中",
                SAddress: "瑞昌市"
            }
        },
        //引入一个混合（局部,只有引入的组件才能使用）
        // mixins:[mixin,mixin2],
        methods: {
            showAddress() {
                alert("学校地址"+this.SAddress)
            }
        }
    }
</script>

<!--组件的样式-->
<style>
    .demo {
        font-weight: 800;
        font-family: "Bernard MT Condensed";
        color: aqua;
    }
</style>