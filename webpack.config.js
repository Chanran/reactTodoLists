const webpack = require("webpack");

module.exports = {
  //页面入口
  entry:[
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './scripts/index' // Your appʼs entry point
  ],
  //入口文件输出配置
  output:{
      path:'./client/build',
      fileName:'bundle.js'
  },
  module:{
    //加载器
    loaders:[
      {
        test:/\.css$/,loader:'style-loader!css-loader'
      },
      {
        test:/\.js$/,loader:'jsx-loader?harmony'
      },
      {
        test:/\.scss$/,loader:'style-loader!css-loader!sass-loader?sourceMap'
      },
      //png,jpg图片超过8k就以base64的形式内联在代码里，减少请求数量
      {
        test:/\.(png|jpg)$/,loader:'url-loader?limit=8192'
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