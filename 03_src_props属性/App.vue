<template>
    <div>
        <SchoolName SchoolName="瑞昌一中" SchoolAddress="瑞昌市" :SchoolTime="30+1"/>
        <SchoolName SchoolName="瑞昌二中" SchoolAddress="瑞昌市"/>
        <SchoolName SchoolName="文华学院" SchoolAddress="武汉市" :SchoolTime="70"/>
    </div>
</template>

<script>

    import SchoolName from './components/SchoolName.vue'

    export default {
        name: 'App',
        components: {
            SchoolName
        }
    }

</script>