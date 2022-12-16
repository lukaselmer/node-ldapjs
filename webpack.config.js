// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = () => ({
  target: 'node',
  entry: './lib/index.js',
  // entry: './test/client.test.js',
  output: {
    path: path.resolve(__dirname, 'build/test')
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js)$/i,
  //       loader: 'babel-loader'
  //     }
  //     // Add your rules for custom modules here
  //     // Learn more about loaders from https://webpack.js.org/loaders/
  //   ]
  // },
  mode: 'production' // process.env.NODE_ENV === 'production' ? 'production' : 'development'
})

// const TerserPlugin = require('terser-webpack-plugin')

// module.exports = {
//   target: 'node',
//   // entry: './lib/index.js',
//   entry: './test/client.test.js',
//   output: {
//     path: path.resolve(__dirname, 'build/test'),
//     filename: 'ldap.js'
//   }
//   // mode: 'production',
//   // optimization: {
//   //   minimize: true,
//   //   minimizer: [new TerserPlugin()]
//   // }
// }
