import common from './webpack.common.babel'

const options = {
  // (1) Inform WebPack we want to build a bundle for the Browser environment
  target: "web",

  // (2) Tell WebPack what the root of your browser application is
  entry: './source/client/client.js',

  // (3) Tell WebPack where the generated output file should go
  output: {
    filename: './public/client.bundle.js'
  },

  // (4) Spread common properties
  ...common
}
export default options
