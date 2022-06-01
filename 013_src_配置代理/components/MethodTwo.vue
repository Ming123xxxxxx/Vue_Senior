<template>
    <div>
        <button @click="getStudents">获取图书信息(方式二)</button>
        <br>
        <br>
        <button @click="getMessage">获取返回信息(方式二)</button>
    </div>
</template>

<script>

    //引入axios
    import axios from 'axios'

    export default {
        name: "MethodTwo",
        components: {

        },
        methods: {
            getStudents() {
                axios.get("http://localhost:8080/api/books/5").then(
                    response => {
                        console.log('请求成功', response.data)
                    },
                    error => {
                        console.log("请求失败", error.message)
                    }
                )

            },
            getMessage() {
                axios.get("http://localhost:8080/ming/books/get").then(
                    response => {
                        console.log('请求成功', response.data)
                    },
                    error => {
                        console.log("请求失败", error.message)
                    }
                )

            }
        },
    }
</script>