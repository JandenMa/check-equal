const path = require('path')

// wenpack configuration
module.exports = {
  // devtool: 'source-map',
  entry: {
    index: './CheckEqual.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015,presets[]=stage-0'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  }
}
