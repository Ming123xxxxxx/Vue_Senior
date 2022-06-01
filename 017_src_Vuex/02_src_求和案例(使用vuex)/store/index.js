import Vue from 'vue'
//引入插件
import Vuex from 'vuex'

//使用插件
Vue.use(Vuex)

//用于创建Vuex中的store

//准备actions,用于响应组件中的动作
const actions = {
    add: function (context, data) {
        context.commit('Add', data)
    },
    reduce: function (context, data) {
        context.commit('Reduce', data)
    }
}

//准备mutations,用于操作数据(state)
const mutations = {
    Add(state, value) {
        state.numbers += value
    },
    Reduce (context, data) {
        state.numbers -= data
    }
}

//准备state,用于存储数据
const state = {
    numbers: 0,
}

//创建store并暴露(导出)store
export default new Vuex.Store({
    actions,
    mutations,
    state
})