<template>
    <div>
        <!--展示用户列表-->
        <div v-show="users.length">
            <span v-for="u in users" :key="u.login" style="height:200px;width:200px">
                <a :href="u.html_url">
                    <img :src="u.avatar_url" style="height: 100px;width:100px;" />
                </a>
                <p>{{u.login}}</p>
            </span>
        </div>

        <!--展示欢迎词-->
        <h1 v-show="statusObj.isFirst">欢迎使用</h1>
        <!--展示加载中-->
        <h1 v-show="statusObj.isLoading">加载中...</h1>

        <!--展示错误信息-->
        <h1 v-show="statusObj.errorMessage">{{statusObj.errorMessage}}</h1>
    </div>
</template>

<script>

    export default {
        name: "UserList",
        data() {
            return {
                statusObj: {
                    isFirst: true,
                    isLoading: false,
                    errorMessage: '',
                },
                users: []
            }
        },
        mounted() {
            this.$bus.$on('updateListData', (dataObj, users) => {
                console.log("UserList组件收到数据为", users)
                this.users = users
                this.statusObj = dataObj
                this.statusObj.isFirst = false
            })
        },
    }
</script>