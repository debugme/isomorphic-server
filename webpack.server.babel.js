import common from './webpack.common.babel'

const options = {
  // (1) Inform WebPack we want to build a bundle for the Node environment
  target: "node",

  // (2) Tell WebPack what the root of your server application is
  entry: './source/index.js',

  // (3) Tell WebPack where the generated output file should go
  output: {
    filename: './build/server.bundle.js'
  },

  // (4) Spread common properties
  ...common
}
export default options
