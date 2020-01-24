const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      Atoms: path.resolve(__dirname, 'src/components/atoms'),
      FontSizes: path.resolve(__dirname, 'src/settings/__font_sizes'),
      Colors: path.resolve(__dirname, 'src/settings/__colors'),
      Devices: path.resolve(__dirname, 'src/settings/__devices'),
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: "/",
    filename: 'bundle.js'
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
          filename: "index.html"
      }),
      new webpack.HotModuleReplacementPlugin(),
  ],
};
