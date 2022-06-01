<template>
    <div>
        <SearchUser/>
        <UserList/>
    </div>
</template>

<script>

    import SearchUser from './conpoments/SearchUser'
    import UserList from './conpoments/UserList'

    export default {
        name:"App",
        components:{
            SearchUser,
            UserList
        },
      
    }
</script>