const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  //开启代理服务器(方式一)
  // devServer: {
  //   proxy: 'http://localhost'
  // }

   //开启代理服务器(方式二)
   devServer:{
     proxy:{
       //'/api':请求前缀,api可换成其他名字,若请求地址前有api则走代理,没有则不走
       '/api':{
         //target:请求地址
         target:'http://localhost',
         //将请求路径中带'/api'的字符串转换为空字符串
         pathRewrite:{'^/api':''},
         //ws和changeOrigin可不写,默认为true
         //ws:用于支持websocket
         ws:true,
         //changeOrigin:用于控制请求头中的host值
         changeOrigin:true
       },
       '/ming':{
        //target:请求地址
        target:'http://localhost:81',
        //将请求路径中带'/ming'的字符串转换为空字符串
        pathRewrite:{'^/ming':''},
        //ws和changeOrigin可不写,默认为true
        //ws:用于支持websocket
        ws:true,
        //changeOrigin:用于控制请求头中的host值
        changeOrigin:true
      }
       
     }
   }
})
