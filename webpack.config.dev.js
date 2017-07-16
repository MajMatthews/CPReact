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
    path: path.resolve  (__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.resolve  (__dirname, 'client')
    },
    // CSS
    { 
      test: /\.styl$/, 
      include: path.resolve  (__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    },
    // IMAGES
    { 
      test: /\.(png|jpg)$/, 
      include: path.resolve  (__dirname, 'client'),
      loader: 'url-loader?limit=8192'
    },
 

 {
    test: /\.css|.pcss$/,
    include: [
     
      path.resolve  (__dirname, 'client'),
      // path.resolve  (__dirname, 'node_modules/react-toolbox/lib'),
    ],
    loader: "style-loader!css-loader!postcss-loader" }
    ]
  },
};
