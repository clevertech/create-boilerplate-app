var path = require('path')

module.exports = {
  resolve: {
    modules: [__dirname, 'node_modules']
  },
  performance: {
    hints: false
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
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    namedModules: true,
    namedChunks: true,
    nodeEnv: 'development',
    flagIncludedChunks: false,
    occurrenceOrder: false,
    sideEffects: false
  },
  node: {
    fs: 'empty',
    __dirname: false,
    __filename: true,
    child_process: 'empty',
    readline: 'empty'
  },
  target: 'node'
}
