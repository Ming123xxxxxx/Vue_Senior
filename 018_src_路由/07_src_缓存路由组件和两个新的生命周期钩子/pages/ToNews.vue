<template>
    <ul>
        <li :style="{opacity}"> 欢迎学习Vue</li>
        <li>new001 <input type="text"></li>
        <li>new002 <input type="text"></li>
        <li>new003 <input type="text"></li>
    </ul>
</template>

<script>

    export default {
        name: "ToNews",
        data() {
            return {
                opacity:1
            };
        },
        mounted(){
           this. timer = setInterval(() => {
                this.opacity -= 0.01
                if(this.opacity <=0.1){
                    this.opacity =1
                }
            },16)
        },
        activated(){
            console.log('ToNews被激活')
        },
        deactivated(){
            console.log('ToNews被失活')
        }
    }
</script>

<style scoped>
    li{
        margin-top: 10px;
    }
</style>
