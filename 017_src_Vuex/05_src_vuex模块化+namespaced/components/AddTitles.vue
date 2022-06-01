<template>
    <div>
        <button @click="addTitleServer">点击增加一句话</button>
        <ul>
            <li v-for="(t,index) in title" :key="index">{{t}}</li>
        </ul>
    </div>
</template>

<script>

    import { mapState,mapActions} from 'vuex'

    export default {
        name: "AddTitles",
        computed: {
            ...mapState('c', ['title'])

        },
        methods:{
              ...mapActions('c',['addTitleServer'])
        }
    }
</script>