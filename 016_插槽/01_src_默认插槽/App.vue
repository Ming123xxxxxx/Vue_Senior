<template>
    <div class="container">
        <CateGory title="美食">
            <img width="100%" height="200"
                src="https://img0.baidu.com/it/u=4071723075,1300766131&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500" />
        </CateGory>
        <CateGory title="游戏">
            <ul style="list-style: none;margin-right: 40px;text-align:center;">
                <li v-for="(l,index) in games" :key="index">
                    {{l}}
                </li>
            </ul>
        </CateGory>
        
        <CateGory title="电影">
            <video controls width="100%" height="200" src="https://gossv.vcg.com/videos/mts_videos/medium/VCG2218090475.mp4">
            </video>
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