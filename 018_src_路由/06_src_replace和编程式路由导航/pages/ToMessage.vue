<template>
    <div>
        <ul>
            <li v-for="(m,index) in MList" :key="index">
                <router-link :to="{
                    name:'dt',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">{{m.title}}</router-link>

                <button @click="pushm(m)">push查看</button>
                <button @click="replacem(m)">replace查看</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>

    import { nanoid } from 'nanoid'

    export default {
        name: "ToMessage",
        data() {
            return {
                MList: [
                    { id: nanoid(), title: "消息001" },
                    { id: nanoid(), title: "消息002" },
                    { id: nanoid(), title: "消息003" }
                ]
            }
        },
        methods:{
            pushm(m){
                //路由跳转留下记录
                this.$router.push({
                    name:'dt',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                })
            },
            replacem(m){
                //路由跳转不留下记录
                this.$router.replace({
                    name:'dt',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                })
            }
        }
    }
</script>

<style scoped>
    button{
        margin-left: 10px;
        margin-top: 10px;
    }
</style>