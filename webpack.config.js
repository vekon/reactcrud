module.exports = {
  entry: './index.js',
  output: {
    path: '/',
    fileName: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: ['babel'],
      query: {
        presets: ['es2015','react','stage-1']
      }
    }]
  }
}
