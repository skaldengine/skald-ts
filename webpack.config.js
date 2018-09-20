const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TslintWebpackPlugin = require('tslint-webpack-plugin')
const TypedocWebpackPlugin = require('typedoc-webpack-plugin')

const BUILD_PATH = path.resolve(__dirname, 'build')

module.exports = {
  mode: 'development',
  entry: './source/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      skald: path.join(__dirname, 'source', 'skald')
    }
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_PATH
  },
  plugins: [
    // new CopyWebpackPlugin([
    //   {from: 'static/*', to: BUILD_PATH}
    // ]),
    new HtmlWebpackPlugin({
      template: './source/index.html'
    }),
    new TslintWebpackPlugin({
      files: ['./source/**/*.ts']
    }),
    new TypedocWebpackPlugin({
      out: path.resolve(__dirname, 'docs'),
      target: 'ES2015'
    })
  ],
  devServer: {
    contentBase: BUILD_PATH
  }
}