const path       = require('path');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: [ 
    './src/index.jsx' 
  ], 
  output: { 
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  }, 
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: { 
    rules: [{ 
      exclude: /node_modules/, 
      use: ['babel-loader']
    }], 
  },
  resolve: { 
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new CopyPlugin([{from: './public'}])
  ],
}; 