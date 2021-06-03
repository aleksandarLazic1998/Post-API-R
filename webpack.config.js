const path = require('path');
// For JavaScript
module.exports = {
  // Take from 
  entry: path.resolve(__dirname, './src/js/index.js'),
  // For deploying js code with babel
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  // Import it in
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: 'bundled.js',
  }
};