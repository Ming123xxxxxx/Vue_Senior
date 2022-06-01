<template>
    <div>
        <CountNumber/>
        <hr>
        <APerson/>
        <hr>
        <AddTitles/>
    </div>
</template>

<script>

    import CountNumber from "./components/CountNumber"
    import APerson from "./components/APerson"
    import AddTitles from './components/AddTitles'

    export default {
        name: "App",
        components: {
            CountNumber,
            APerson,
            AddTitles
        }
    }
</script>