var webpack = require('webpack')
var path = require('path')
var BUILD_DIR = path.resolve(__dirname, 'public')
var APP_DIR = path.resolve(__dirname, 'src')

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'sass-loader!style-loader!css-loader'
      },
      {
        test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  node: {
    fs: 'empty'
  }
}

module.exports = config
