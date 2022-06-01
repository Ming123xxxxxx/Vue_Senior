<template>

    <div>
        <input @keyup.enter="addPerson" type="text" placeholder="请输入名字" v-model="pname">
        <button @click="addPerson">添加名字</button>
        <button @click="addWang">点此按钮只添加姓王的人</button>
        <h2>列表中第一个人的名字:{{firstPersonName}}</h2>
        <h2>人员列表</h2>
        <ul>
            <li v-for="p in personList" :key="p.id">
                {{p.name}}
            </li>
        </ul>
        <h2 style="color: red;">CountNumber组件的numbers为:{{numbers}}</h2>
    </div>

</template>

<script>
    import { mapState,mapGetters } from 'vuex'
    import { nanoid } from 'nanoid'

    export default {
        name: "APerson",
        data() {
            return {
                pname: '',
            };
        },
        computed: {
            ...mapState('b',['numbers']),
            ...mapState('a',['personList']),
            ...mapGetters('a',['firstPersonName']),

            //此方式可不用使用mapGetters来获取vuex中a模块下的getters中的firstPersonName
            // firstPersonName(){
            //     return this.$store.getters['a/firstPersonName']
            // }

        },
        methods: {
            addPerson() {
                let p = {
                    id: nanoid(),
                    name: this.pname
                }
                //通过"vuex的模块名/模块中的mutations中对应的函数名"
                //将值传入到a中的mutations中对应的Addperson方法,也就是managePerson中的mutations中对应的Addperson方法
                this.$store.commit('a/AddPerson', p)
                this.pname=''
            },
            addWang(){
                let p = {
                    id: nanoid(),
                    name: this.pname
                }
                this.$store.dispatch('a/addw', p)
                this.pname=''
            }
        }
    }
</script>