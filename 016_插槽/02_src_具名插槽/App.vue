<template>
    <div class="container">
        <CateGory title="美食">
            <img slot="center" width="100%" height="200"
                src="https://img0.baidu.com/it/u=4071723075,1300766131&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500" />
            <a slot="footer" href="#javascipt:;">更多美食</a>
        </CateGory>
        <CateGory title="游戏">
            <ul slot="center" style="list-style: none;margin-right: 40px;text-align:center;">
                <li v-for="(l,index) in games" :key="index">
                    {{l}}
                </li>
            </ul>
            <div class="container" slot="footer">
                <a href="#javascipt:;">单机游戏</a>
                <a href="#javascipt:;">网络游戏</a>
            </div>
        </CateGory>

        <CateGory title="电影">
            <video slot="center" controls width="100%" height="150"
                src="https://gossv.vcg.com/videos/mts_videos/medium/VCG2218090475.mp4">
            </video>
            <!--若将slot写在template上,则可将slot="xxx"写成v-slot:xxx-->
            <template v-slot:footer>
                <div class="container">
                    <a href="#javascipt:;">经典</a>
                    <a href="#javascipt:;">热门</a>
                    <a href="#javascipt:;">推荐</a>
                </div>
                <h4 style="text-align: center;">欢迎前来观影</h4>
            </template>
        </CateGory>
    </div>
</template>

<script>

    import CateGory from './components/CateGory.vue'

    export default {
        name: 'App',
        data() {
            return {
                foods: ['火锅', '辣条', '面条'],
                games: ['王者荣耀', "英雄联盟", "穿越火线"],
                films: ['肖申克的救赎', '当幸福来敲门', '教父']
            }
        },

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