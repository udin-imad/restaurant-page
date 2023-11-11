const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/main.js',
    assetModuleFilename: './img/[hash][ext]'
  },
  plugins: [new HtmlWebpackPlugin(
    {
      template: './src/template.html'
    }
  )],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|svg|png|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              jpeg: {
                quality: 70,
                compressionLevel: 3,
              },
              png: {
                quality: 70,
                compressionLevel: 3,
              }
            },
          },
        },
      }),
    ],
  },
};