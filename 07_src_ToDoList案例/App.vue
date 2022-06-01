<template>
    <div>
        <MyTop class="demo" />
        <MyList :todos="todos" />
        <MyFooter v-if="todos.length>0" class="demo" :todos="todos" />
    </div>
</template>

<script>

    import MyFooter from './components/MyFooter'
    import MyTop from './components/MyTop'
    import MyList from './components/MyList'

    export default {
        name: "App",
        data() {
            return {
                todos: JSON.parse(localStorage.getItem('todos')) == null ? [] : JSON.parse(localStorage.getItem('todos')),
            }
        },
        mounted() {
            //若输入框内容不为空则添加数据
            this.$bus.$on('receive', (data) => {
                if (data.title.trim()) {
                    this.todos.push(data)
                }
            })
            this.$bus.$on('dall', (data) => {
                this.todos = data
            })
            this.$bus.$on('ga', (data) => {
                this.todos.forEach((todo) => {
                    todo.done = data
                })
            })
            this.$bus.$on('appdelete', (data) => {
                this.todos = this.todos.filter((todo) => {
                    return todo.id !== data
                })
            })
            this.$bus.$on('havedones', (data) => {
                this.todos.forEach((todo) => {
                    if (todo.id == data) {
                        todo.done = !todo.done
                    }
                })
            }),
            this.$bus.$on('updateTodo',(id,data) => {
                this.todos.forEach((todo) => {
                    if (todo.id == id) {
                        todo.title = data
                    }
                })
            })
        },
        beforeDestroy() {
            this.$bus.$off('dall')
            this.$bus.$off('receive')
            this.$bus.$off('ga')
            this.$bus.$off('dall')
            this.$bus.$off('havedones')
            this.$bus.$off('updateTodo')
        },
        watch: {
            todos: {
                //开启深度监视
                deep: true,
                handler(value) {
                    localStorage.setItem('todos', JSON.stringify(value))
                }
            }

        },
        components: {
            MyFooter,
            MyTop,
            MyList
        }
    }


</script>

<style>
    .demo {
        width: 300px;
        background-color: wheat;
    }
</style>