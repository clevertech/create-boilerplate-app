var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  stats: {
    colors: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

// var path = require('path')
// var webpack = require('webpack')

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: 'app.bundle.js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['es2015']
//                 }
//             }
//         ]
//     },
//     stats: {
//         colors: true
//     },
//     devtool: 'source-map'
// };
