//求和相关配置
export default  {
    //只有添加namespaced且为true,mapState才能识别state中的数据
   namespaced:true,
   actions: {
       add: function (context, data) {
           context.commit('Add', data)
       },
       reduce: function (context, data) {
           context.commit('Reduce', data)
       }
   },
   mutations: {
       Add(state, value) {
           state.numbers += value
       },
       Reduce(state, data) {
           state.numbers -= data
       },
   },
   state: {
       numbers: 0,
       school: '瑞昌二中',
       subject: 'Java',
   },
   getters: {
       bigSum(state) {
           return state.numbers * 10
       }
   }
}
