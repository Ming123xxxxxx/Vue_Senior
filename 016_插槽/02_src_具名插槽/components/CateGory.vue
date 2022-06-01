<!--组件的结构-->
<template>
    <div style="background-color: cyan;width: 300px;height: 300px;">
        <h3 style="text-align: center;background-color: yellow;">{{title}}</h3>
        <slot name="center"></slot>
        <slot name="footer"></slot>
        <br>
    </div>
</template>

<!--组件交互相关的代码(数据、方法等)-->
<script>

    //暴露组件
    export default {
        name: 'CateGory',
        props: ['title', 'listdata']
    }

</script>