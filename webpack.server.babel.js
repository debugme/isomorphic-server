const configuration = {
  // (1) Inform WebPack we want to build a bundle for the Node environment
  target: "node",

  // (2) Tell WebPack what the root of your server application is
  entry: './source/index.js',

  // (3) Tell WebPack where the generated output file should go
  output: {
    filename: './build/bundle.js'
  },

  // (4) Transpile all .js and .jsx files (But not those in node_modules folder)
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },

  // (5) Recognise the following suffixes as files eligible for transpilation
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
export default configuration
