<template>
    <div>
        <ul>
            <li v-for="(m,index) in MList" :key="index">

                <!--路由跳转params传参的写法一:字符串写法-->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->


                <!--路由跳转params传参的写法二:对象写法 ,此处路由地址必须用name，不能用path-->
                <router-link :to="{
                    name:'dt',
                    params:{
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