var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const reactToolboxVariables = () =>{
  return []
}
module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/cp-guideapp'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    },
    // CSS
    { 
      test: /\.styl$/, 
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    },
    // IMAGES
    { 
      test: /\.(png|jpg)$/, 
      include: path.join(__dirname, 'client'),
      loader: 'url-loader?limit=8192'
    },
 

 {
    test: /\.css|.pcss$/,
    include: [
     
      path.join(__dirname, 'client'),
      path.join(__dirname, 'node_modules/react-toolbox/lib'),
    ],
    loader: "style-loader!css-loader!postcss-loader" }
    ]
  },
  postcss: function () {
        return [];
    }
};
