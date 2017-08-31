
module.exports ={
	entry:{
    main:"./main.js",
    ma:"./ma.js"
  } ,//指定入口文件
  output: {
        path: __dirname+'/build',
        filename: '[name].build.js'
  },//输出文件
  module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        //     { test: /\.js$/, loader: 'jsx-loader?harmony' },
        //     { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
        //     { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
      ]
    }
}
