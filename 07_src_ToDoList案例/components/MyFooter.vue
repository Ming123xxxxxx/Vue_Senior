<template>
    <div>
        <input type="checkbox" :checked="ck" @change="getall"> 已完成{{todos.filter(todo =>
        todo.done==true).length}}/全部{{todos.length}}
        <button @click="deleteAll">清除选择的任务</button>
    </div>

</template>
  
<script>

    export default {
        name: "MyFooter",
        data() {
            return {
                complete: 0,
                all: 0,
            }
        },
        methods: {

            getall() {
                this.$bus.$emit('ga', !this.ck)
            },

            deleteAll() {

                if (confirm('是否删除所选内容')) {
                    var arr = new Array()
                    this.todos.forEach((todo) => {
                        if (!todo.done) {
                            arr.push(todo)
                        }
                    })
                    this.$bus.$emit('dall', arr)
                }

            }
        },
        computed: {
            ck() {
                return this.todos.filter(todo => todo.done == true).length === this.todos.length && this.todos.length > 0
            }
        },
        props: ['todos']
    }


</script>

<style>

</style>