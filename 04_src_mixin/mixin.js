export const mixin ={
    methods:{
        showName(){
            alert("学校名称:"+this.SName)
        }
    }
}


export const mixin2 ={
    data(){
        return{
            msg:"School和Student的共有信息"
        }
    }
}
