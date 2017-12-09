const options = {
  // (1) Transpile all .js and .jsx files (But not those in node_modules folder)
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },

  // (2) Recognise the following suffixes as files eligible for transpilation
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

export default options