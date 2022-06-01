module.exports = {
  presets: [
    //此段为vue自身的不能删
    '@vue/cli-plugin-babel/preset',
    //在此追加内容
    ["@babel/preset-env", { "modules": false }],
  ],
  //追加内容
  plugins:[
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
