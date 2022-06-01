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
            //纯手工写法
            // states() {
            //     return this.$store.state
            // },
            // sum() {
            //     return this.states.numbers
            // },
            // school() {
            //     return this.states.school
            // },
            // subject() {
            //     return this.states.subject
            // },

            // bigSum() {
            //     return this.$store.getters.bigSum
            // }

            //借mapState生成计算属性,从state中读取数据(对象写法),key:value,key为生成的属性名,value为读取的vuex中state中的属性名
            // ...mapState({ numbers: 'numbers', school: "school", subject: "subject" }),
            //借mapState生成计算属性,从state中读取数据(数组写法),此方法必须保证生成的属性名和读取的vuex中state中的属性名一致
            ...mapState(['numbers', 'school', 'subject']),

            //借mapState生成计算属性,从getters中调用函数(对象写法),key:value,key为生成的属性名,value为读取的vuex中getters中的函数名
            // ...mapGetters({bigSum:'bigSum'})，
            //借mapState生成计算属性,从getters中调用函数(数组写法),,此方法必须保证生成的属性名和读取的vuex中getters中的函数名一致
            ...mapGetters(['bigSum'])


        },
        methods: {

            //借助mapActions生成对应的方法,方法会自动调用dispatch取调用vuex中的actions中的对应的函数
            //对象写法
            // ...mapActions({ incream: 'add' }),
            //数组写法,方法名和['xxx']中的'xxx'相同,且'xxx'必须要在vuex的actions中存在
            ...mapActions(['add']),

            //纯手工写法
            // incream() {
            //     //将values传给vuex中的actions中对应的函数进行处理
            //     this.$store.dispatch('add', this.values)
            // },

            /*****************************/

            //借助mapMutations生成对应的方法,方法会自动调用commit取调用vuex中的mutations中的对应的函数
            //对象写法
            // ...mapMutations({ decream: 'Reduce' }),
            //数组写法,方法名和['xxx']中的'xxx'相同，且'xxx'必须要在vuex的mutations中存在
            ...mapMutations(['Reduce']),

            //纯手工写法
            // decream() {
            //     //可直接使用cmommit将值传给vuex中的mutations中对应的函数,无需经过vuex中的actions
            //     this.$store.commit('Reduce', this.values)
            // },

        }
    }
</script>

<style scoped>
    button {
        margin-left: 10px;
    }
</style>