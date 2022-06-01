<template>
    <div>
        <ToTest/>
        <ToTest2/>
        <ToTest3/>
        <ToTest4/>
    </div>
</template>

<script>

    import ToTest from './components/ToTest'
    import ToTest2 from './components/ToTest2'
    import ToTest3 from './components/ToTest3'
    import ToTest4 from './components/ToTest4'

    export default {
        name: "App",
        components:{
            ToTest,
            ToTest2,
            ToTest3,
            ToTest4
        }
    }

</script>