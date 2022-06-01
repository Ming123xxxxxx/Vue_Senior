<template>
    <div>
        <h1>当前求和为:{{numbers}}</h1>
        <h2>十倍number:{{bigSum}}</h2>
        <h2>学校:{{school}}</h2>
        <h2>学科:{{subject}}</h2>
        <select v-model.number="values">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add(values)">+</button>
        <button @click="Reduce(values)">-</button>
        <hr>
        <h2 style="color: red;">APerson组件的总人数是:{{personList.length}}</h2>
    </div>
</template>

<script>
    //引入mapState和mapGetters
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

    export default {
        name: "CountNumber",
        data() {
            return {
                values: 1
            }
        },
        computed: {
            ...mapState('b',['numbers','school','subject']),
            ...mapState('a',['personList']),
            ...mapGetters('b',['bigSum'])
        },
        methods: {
            ...mapActions('b',['add']),
            ...mapMutations('b',['Reduce'])
        }
    }
</script>

<style scoped>
    button {
        margin-left: 10px;
    }
</style>