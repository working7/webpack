# webpack
为何用Webpack目的以及优点和缺点，如何使用它。\

# 是什么？ 
webpack是一个打包工具,它做的事情是,分析你的项目结构,找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。 

目的？
+ 解决代码在浏览器的请求次数。 
+ 解决代码的冲突,形成模块化的代码库。 

优点
+ 模块化拥有css-loader,style-loader,sass-loader等加载器运用在webpack-config.js上
+ spa页面打包不需要分包特别适合。

缺点
+ 在兼容性方面，webpack一直是面向最新的标准，自身的很多特性需要依赖polyfill才能向下兼容，甚至有的特性最新的浏览器都还没有原生兼容，用起来难免有点折腾。
