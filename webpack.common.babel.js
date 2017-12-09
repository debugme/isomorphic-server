const options = {
  // (1) Transpile all .js and .jsx files (But not those in the node_modules folder)
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },

  // (2) Use the following suffixes to identify files for transpilation
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

export default options