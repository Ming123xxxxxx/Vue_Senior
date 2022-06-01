<template>
    <div>
        <h1>当前求和为:{{$store.state.numbers}}</h1>
        <select v-model.number="values">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="incream">+</button>
        <button @click="decream">-</button>
        <button @click="oddnumber">奇数再加</button>
        <button @click="settimeadd">过会再加</button>
    </div>
</template>

<script>

    export default {
        name: "CountNumber",
        data() {
            return {
                values: 1
            }
        },
        methods: {
            incream() {
                //将values传给vuex中的actions中对应的函数进行处理
                this.$store.dispatch('add', this.values)
            },
            decream() {
                //可直接使用cmommit将值传给vuex中的mutations中对应的函数,无需经过vuex中的actions
                this.$store.commit('Reduce', this.values)
            },
            oddnumber() {
                if (this.$store.state.numbers % 2) {
                    this.incream()
                }
            },
            settimeadd() {
                setTimeout(() => { this.incream() }, 500)
            }
        },
    }
</script>

<style scoped>
    button {
        margin-left: 10px;
    }
</style>