<template>
    <div>
        <div class="row">
           <ToBanner/>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!--vue中借助router-link标签来实现路由切换-->
                    <router-link replace class="list-group-item" active-class="active" :to="{name:'ab'}">About</router-link>
                    <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import ToBanner from './components/ToBanner'

    export default {
        name: "App",
        components:{
            ToBanner
        }
    }
</script>