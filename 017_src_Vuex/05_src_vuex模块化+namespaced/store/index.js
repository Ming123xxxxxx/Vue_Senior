import Vue from 'vue'
//引入插件
import Vuex from 'vuex'

//引入其他addSum和countPerson
import addSum from './addSum'
import managePerson from './managePerson'
import titles from './titles'

//使用插件
Vue.use(Vuex)

//用于创建Vuex中的store

//创建store并暴露(导出)store
export default new Vuex.Store({
    modules: {
        //key:value 可将a:和b:省略简写,默认名为value值
        a:managePerson,
        b:addSum,
        c:titles
    }
})