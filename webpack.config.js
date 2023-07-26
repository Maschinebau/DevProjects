const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

module.exports = {
  entry: { 
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
        publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    open: true // сайт будет открываться сам при запуске npm run dev
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: 'babel-loader',
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'easy-01.html',
      template: './src/easy-01.html',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ]
}