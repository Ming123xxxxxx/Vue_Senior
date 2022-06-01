<template>
    <div style="background-color: cyan;width: 300px;height: 300px;">
        <h3 style="text-align: center;background-color: yellow;">{{title}}</h3>
        <!--通过此方式将值传给使用插槽的组件-->
        <slot :gm="games" :fd="foods" :fm="filems">默认内容</slot>
        <br>
    </div>
</template>

<script>

    export default {
        name: 'CateGory',
        data() {
            return {
                foods:["火锅","辣条","烧烤"],
                games: ['王者荣耀', "英雄联盟", "穿越火线"],
                filems:["肖申克的救赎","当幸福来敲门","教父"]
            }
        },
        props: ['title', 'listdata']
    }

</script>