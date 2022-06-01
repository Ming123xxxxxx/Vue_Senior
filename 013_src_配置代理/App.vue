<template>
    <div>
        <MethodOne/>
        <br>
        <MethodTwo/>
    </div>
</template>

<script>

    //引入axios
    import MethodOne from './components/MethodOne'
    import MethodTwo from './components/MethodTwo'

    export default {
        name: "App",
        components: {
            MethodOne,
            MethodTwo
        }
    }
</script>