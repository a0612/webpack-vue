var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // context: path.resolve(__dirname, 'app'),
  entry: './src/main.js',
  mode: 'development',
  output: {
    path: __dirname + '/dist',
    filename: './js/index.bundle.js',
  },
  resolve: {
    // 这些格式的文件可以不适用扩展名
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    host:'localhost',
    port: 9000,
    compress: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack打包配置vue项目',
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              mode: 'production',
            }
          },
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          // // 写在后面的loader先执行
          // { loader: 'style-loader'},
          // { loader: 'css-loader'},
          // { loader: 'postcss-loader' },
          // { loader: 'stylus-loader' },
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader',
        ]
      }
    ]
  }
}
