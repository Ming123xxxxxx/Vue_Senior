<template>
    <div>
        <CountNumber/>
        <hr>
        <APerson/>
    </div>
</template>

<script>

    import CountNumber from "./components/CountNumber"
    import APerson from "./components/APerson"

    export default {
        name: "App",
        components: {
            CountNumber,
            APerson
        }
    }
</script>