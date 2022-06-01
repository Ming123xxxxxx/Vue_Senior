<template>
    <div>
        <div>
            <h2>Search GitHub Users</h2>
            <form @click.prevent>
                <input v-model="keyword" type="text"> <input type="submit" value="Search" @click="searchUs">
            </form>
        </div>
    </div>

</template>

<script>

    export default {
        name: "SearchUser",
        data() {
            return {
                keyword: ''
            }
        },
        methods: {
            searchUs() {
                //请求前更新UserList的数据
                this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errorMessage:''},[])
                this.$http.get('https://api.github.com/search/users?q='+this.keyword).then(
                    response => {
                        console.log("请求成功")
                        this.$bus.$emit('updateListData',{isLoading:false,errorMessage:''},response.data.items)
                    },
                    error => {
                        console.log("请求失败")
                        this.$bus.$emit('updateListData',{isLoading:false,errorMessage:error.message},[])
                    }
                )
            }
        },
    }
</script>