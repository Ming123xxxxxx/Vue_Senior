<template>
   <div>
    <h2>我是Home的内容</h2>
    <div>
        <ul class="nav nav-tabs">
            <li>
                <router-link replace class="list-group-item" avtive-class="avtive" to="/home/news">News</router-link>
            </li>
            <li>
                <router-link replace class="list-group-item" avtive-class="avtive" to="/home/message">Message</router-link>
            </li>
        </ul>

        <!--keep-alive:让router-view中的路由组件在互相切换时不被销毁-->
        <!--include:输入使其在router-view中的路由组件相互切换时不被销毁的组件的组件名-->
        <!--若不配置include则表示router-view中的所有路由组件在互相切换时都不销毁-->

        <!--若只使其不销毁一个组件则可include="ToNews"-->
        <!--若要使其多个组件不被销毁,则  :include="['ToNews','ToMessage']"-->
        <keep-alive :include="['ToNews','ToMessage']">
            <router-view></router-view>
        </keep-alive>


    </div>
   </div>
</template>

<script>

    export default {
        name: "ToHome"
    }

</script>