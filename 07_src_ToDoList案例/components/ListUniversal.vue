<template>
    <transition appear name="animate__animated animate__bounce" enter-active-class="animate__rubberBand"
        leave-active-class="animate__backOutRight">
        <div id="LU">
            <input type="checkbox" :checked="things.done" @change="handlers(things.id)">
            <span v-show="!things.isEdit">{{things.title}}</span>
            <input ref="inputtitle" style="width: 100px;" @blur="EC(things,$event)" v-show="things.isEdit" type="text"
                :value="things.title">
            <button v-show="!things.isEdit" @click="handedit(things)"
                style="margin-right: 10px;margin-left: 23px;">编辑</button>
            <button style="margin-left: 10px;" @click="deletes(things.id)">删除</button>
        </div>
        </transition>
</template>

<script>

    import 'animate.css'

    export default {
        name: "ListUniversal",
        methods: {
            handlers(id) {
                this.$bus.$emit('sendLNH', id)
            },
            deletes(id) {
                if (confirm('确定删除?')) {
                    this.$bus.$emit('sendLNA', id)
                }
            },
            handedit(todo) {
                todo.isEdit ? this.$set(todo, 'isEdit', false) : this.$set(todo, 'isEdit', true)
                this.$nextTick(function () {
                    this.$refs.inputtitle.focus()
                })
            },
            EC(things, e) {
                things.isEdit = false
                if (!e.target.value.trim()) {
                    this.$bus.$emit('updateTodo', things.id, things.title)
                } else {
                    this.$bus.$emit('updateTodo', things.id, e.target.value)
                }

            }
        },
        props: ['things']
    }
</script>
<style scoped>
    #LU {
        width: 265px;
        margin-bottom: 10px;
        background-color: darkgray;
    }

    #LU:hover {
        background-color: cyan;
    }
</style>