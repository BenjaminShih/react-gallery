const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    // 入口文件
    entry: './client/index.jsx',
    // 出口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    // loader
    module: {
        rules: [
            // 识别jsx文件，用babel进行编译
            { test: /.jsx$/, use: 'babel-loader' },
        ],
    },
    // 插件
    plugins: [
        // html模板, 经过此步骤后dist目录下生成html
        // 作用1.为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题
        // 作用2. 可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口
        new HtmlWebpackPlugin({
            title: 'React Demo',
            template: path.resolve(__dirname, 'index.template.html')
        }),
        // 热替换插件
        new webpack.HotModuleReplacementPlugin(),
        // 执行热替换时打印模块名字
        new webpack.NamedModulesPlugin(),
    ],
    //前端开发服务配置
    devServer: {
        // 热替换配置字段
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9000,
    }
}