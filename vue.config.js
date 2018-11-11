// vue.config.js
const path = require('path')

module.exports = {
  configureWebpack: {
    output: {
      path: path.resolve(__dirname, 'docs'),
      // publicPath: '/'
      publicPath: 'https://marktext.github.io/website/'
    }
  }
}