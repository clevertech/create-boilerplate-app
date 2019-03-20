var path = require('path')

module.exports = {
  resolve: {
    modules: [__dirname, 'node_modules']
  },
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
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  node: {
    fs: 'empty',
    __dirname: true,
    __filename: true,
    child_process: 'empty',
    readline: 'empty'
  },
  target: 'node'
}
