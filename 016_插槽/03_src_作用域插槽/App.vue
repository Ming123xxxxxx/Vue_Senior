<template>
    <div class="container">
        <CateGory title="游戏">
            <!--若用使用作用于插槽,必须在外层包裹一层template-->
            <!--通过scope取得插槽所在组件对应的值,也可将scope写成slote-scope-->
            <!--若只在template中只取一个值,则可使用ES6语法{xx}直接取值-->
            <template scope="{gm}">
                <ul style="margin-right: 40px;text-align:center;">
                    <li v-for="(l,index) in gm" :key="index">
                        {{l}}
                    </li>
                </ul>
            </template>
        </CateGory>

        <CateGory title="游戏">
            <!--若只在template中取多个值,则只能正常使用-->
            <template scope="getObj">
                <ol style="margin-right: 40px;text-align:center;">
                    <li v-for="(l,index) in getObj.fd" :key="index">
                        {{l}}
                    </li>
                </ol>
                <hr>
                <ol style="margin-right: 40px;text-align:center;">
                    <li v-for="(l,index) in getObj.gm" :key="index">
                        {{l}}
                    </li>
                </ol>
            </template>
        </CateGory>

        <CateGory title="游戏">
            <!--若只在template中只取一个值,则可使用ES6语法{xx}直接取值-->
            <template scope="{fm}">
                <h4 style="text-align:center;" v-for="(l,index) in fm" :key="index">
                    {{l}}
                </h4>
            </template>
        </CateGory>
    </div>
</template>

<script>

    import CateGory from './components/CateGory.vue'

    export default {
        name: 'App',
        components: {
            CateGory,

        }
    }
</script>

<style>
    .container {
        display: flex;
        justify-content: space-around;
    }
</style>