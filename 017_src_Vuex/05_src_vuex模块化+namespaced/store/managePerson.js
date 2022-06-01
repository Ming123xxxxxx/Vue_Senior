//人员管理相关配置
export default  {
    //只有添加namespaced且为true,mapState才能识别state中的数据
    namespaced:true,
    actions: {
        addw(context,data){
            if(data.name.indexOf('王')==0){
                context.commit('AddPerson',data)
            }
        }
    },
    mutations: {
        AddPerson(state, data) {
            if (data.name.trim()) {
                state.personList.unshift(data)
            }
        }
    },
    state: {
        personList: [{ id: '001', name: '张三' }],
    },
    getters: {
        firstPersonName(state){
            return state.personList[0].name
        }

    }
}