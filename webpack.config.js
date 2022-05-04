const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/pages/index.ts', './src/styles/index.sass'],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'messenger.bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.sass', 'pug', '.html'],
    fallback: {
      "path": false,
      "fs": false,
      "os": false
    },
  },
  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.sass$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.pug$/,
        loader: '@webdiscus/pug-loader',
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/index.pug'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  }
};
