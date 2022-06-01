<template>
    <div>
        <ul>
            <li v-for="(m,index) in MList" :key="index">
                <!--路由跳转并传参,to的字符串写法-->
                <!-- <router-link :to="tolinks(index)">{{m.title}}</router-link> -->

                <!--路由跳转并传参,to的对象写法-->
                <!---路径写法一,直接写对应的路径-->
                <!-- path:'/home/message/detail', -->
                <!--路径写法二:使用name作为路径-->
                <router-link :to="{
                    name:'dt',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">{{m.title}}</router-link>

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
        // methods: {
        //     tolinks(index) {
        //         return "/home/message/detail?id=" + this.MList[index].id + "&title=" + this.MList[index].title
        //     }
        // }
    }
</script>