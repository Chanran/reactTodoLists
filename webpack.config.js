const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = {
  //页面入口
  entry:{
    index:"./src/js/pages/index.js"
  },
  //入口文件输出配置
  output:{
      path:'./build',
      filename:'bundle.js'
  },
  module:{
    //加载器
    loaders:[
      {
        test:/\.css$/,
        exclude:/node_modules/,
        loader:'style-loader!css-loader'
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel',
        query:{
          presets:['react','es2015']
        }
      }
    ]
  },
  plugin:[
    autoprefixer, //自动补全css3浏览器前缀
    new webpack.HotModuleReplacementPlugin() //webpack热加载插件
  ],
  resolve:{
    extensions:['','.js','.json','.scss'],
    alias:{
      CLIENT:'./client',
      SERVER:'./server'
    }
  }
}