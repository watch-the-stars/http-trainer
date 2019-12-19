const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.[hash].js',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader',
      ],
    }
    ]},
  resolve: {
    extensions: ['.jsx', '.js', '.png', '.svg', '.jpg'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'HTTP-тренажёр',
      meta: {
        viewport: 'width=device-width, initial-scale=1',
      },
    }),
  ],
};
