<template>

    <ul>
        <ListUniversal  v-for="t in todos" :key="t.id" :things="t"/>
    </ul>

</template>

<script>

    import ListUniversal from './ListUniversal'

    export default {
        name: "MyList",
        components: {
            ListUniversal
        },
        mounted() {
            this.$bus.$on('sendLNH',(data) => {
                this.$bus.$emit('havedones',data)
            })

            this.$bus.$on('sendLNA',(data) => {
                this.$bus.$emit('appdelete',data)
            })
         
        },
        beforeDestroy() {
            this.$bus.$off('sendLNH')
            this.$bus.$off('sendLNA')
        },
        props: ['todos',]
    }

</script>
