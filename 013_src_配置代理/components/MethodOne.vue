<template>
    <div>
        <!-- <button @click="getStudents">获取图书信息(方式一)</button> -->
    </div>
</template>

<script>

    //引入axios
    import axios from 'axios'
    
    export default {
        name:"MethodOne",
        components:{

        },
        methods: {
            getStudents(){
                axios.get("http://localhost:8080/books/5").then(
                    response => {
                        console.log('请求成功',response.data)
                    },
                    error => {
                        console.log("请求失败",error.message)
                    }
                )

            }
        },
    }
</script>