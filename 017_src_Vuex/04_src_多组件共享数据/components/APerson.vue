<template>

    <div>
        <input @keyup.enter="addPerson" type="text" placeholder="请输入名字" v-model="pname">
        <button @click="addPerson">添加名字</button>
        <h2>人员列表</h2>
        <ul>
            <li v-for="p in $store.state.personList" :key="p.id">
                {{p.name}}
            </li>
        </ul>
        <h2 style="color: red;">CountNumber组件的numbers为:{{numbers}}</h2>
    </div>

</template>

<script>
    import { mapState } from 'vuex'
    import { nanoid } from 'nanoid'

    export default {
        name: "APerson",
        data() {
            return {
                pname: '',
            };
        },
        computed: {
            ...mapState(['numbers']),
        },
        methods: {
            addPerson() {
                let p = {
                    id: nanoid(),
                    name: this.pname
                }
                this.$store.commit('AddPerson', p)
                this.pname=''
            }
        }
    }
</script>