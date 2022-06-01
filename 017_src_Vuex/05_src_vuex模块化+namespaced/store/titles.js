//引入axios发送请求
import axios from 'axios'

export default {
     //只有添加namespaced且为true,mapState才能识别state中的数据
     namespaced:true,
     //实现网络请求获取数据
     actions:{
        addTitleServer(context){
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('AddTitles',response.data)
                },
                error => {
                    alert(error.message)
                }
            )
     }
     },
     mutations:{
        AddTitles(state,data){
            state.title.push(data)
     }
     },
     state:{
        title:[]
     },
     getters:{

     }
}