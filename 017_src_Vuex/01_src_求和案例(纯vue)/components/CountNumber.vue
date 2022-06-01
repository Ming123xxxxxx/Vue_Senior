<template>
    <div>
        <h1>当前求和为:{{numbers}}</h1>
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
                numbers: 0,
                values: 1
            }
        },
        methods: {
            incream(){
                this.numbers=this.numbers+this.values
            },
            decream(){
                this.numbers=this.numbers-this.values
            },
            oddnumber() {
                if (this.numbers % 2) { this.numbers = this.numbers + this.values }
            },
            settimeadd() {
                setTimeout (()=> { this.numbers += this.values},500)
            }
        },
    }

</script>

<style scoped>
    button{
        margin-left: 10px;
    }
</style>