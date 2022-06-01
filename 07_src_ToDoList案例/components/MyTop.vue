<template>
    <input type="text" v-model="title" @keyup.enter="addthing">
</template>

<script>

    import { nanoid } from 'nanoid'

    export default {
        name: "MyTop",
        data() {
            return {
                title: ''
            }
        },
        methods: {
            addthing() {
                    const todoobj = { id: nanoid(), title: this.title, done: false}
                    this.$bus.$emit("receive",todoobj)
                    this.title = ''
            }
        },
    }
</script>
