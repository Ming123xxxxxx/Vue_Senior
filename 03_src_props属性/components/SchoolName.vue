<!--组件的结构-->
<template>
    <div class="demo">
        <h2>{{msg}}</h2>
        <h2>学校名称:{{SchoolName}}</h2>
        <h2>学校地址:{{SchoolAddress}}</h2>
        <h2>学校年份:{{SchoolTime}}</h2>
        <button @click="showInfo">点我提示学校信息</button>
    </div>
</template>

<!--组件交互相关的代码(数据、方法等)-->
<script>

    //暴露组件
    export default {
        name:'SchoolName',
        data(){
            return{
                msg:"信息显示"
            }
        },
        //简单声明接收
        // props:['SchoolAddress','SchoolName','SchoolTime'],
        //接收的同时限制类型
        // props:{
        //     //定义接受的属性的类型
        //     SchoolAddress:String,
        //     SchoolName:String,
        //     SchoolTime:Number,

        // },
        props:{
            SchoolAddress:{
                type:String,//定义接受的属性的类型
                required:true//true表示此属性是必须要传的
            },
            SchoolName:{
                type:String,//定义接受的属性的类型
                required:true//true表示此属性是必须要传的
            },
            SchoolTime:{
                type:Number,//定义接受的属性的类型
                default:99//表示此属性可以不传,若不传.则默认为99
            }
            
        },
        methods:{
            showInfo(){
                alert("学校名称:",this.SchoolNamme)
            }
        }
    }
</script>

<!--组件的样式-->
<style>

    .demo{
        font-weight: 800;
        font-family: "Bernard MT Condensed";
        color: aqua;
    }
</style>