export default {
    install(Vue) {

        //全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        //定义全局指令
        Vue.directive('fbind',{
            //bind():指令与元素成功绑定时调用
            bind(element, binding) {
                element.value = binding.value
            },
            //指令所在元素被插入页面时调用
            inserted(element) {
                element.focus()
            },
            //指令所在的模板被重新解析时调用
            update(element, binding) {
                element.value = binding.value
            }
        })

        //定义全局混入
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200
                }
            }

        })

        //给Vue原型上添加方法(vm和vc就都能使用了)
        Vue.prototype.hello = () => { alert("Hello Vue") }

    }
}