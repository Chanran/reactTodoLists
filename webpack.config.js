const webpack = require("webpack");
//const autoprefixer = require("autoprefixer");

module.exports = {
  //页面入口
  entry:[
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/js/pages/index.js'
  ],
  //入口文件输出配置
  output:{
      path:__dirname+'/build/',
      filename:'bundle.js',
      publicPath:'/build/'
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
        loaders:['react-hot','babel'],
      }
    ]
  },
  plugins:[
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