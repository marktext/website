// vue.config.js
const path = require('path')
// const SpritePlugin = require('svg-sprite-loader/plugin')

module.exports = {
  outputDir: path.resolve(__dirname, 'docs'),
  publicPath: process.env.PUBLICK_PATH,
  // chainWebpack: config => {
  //   const svgRule = config.module.rule('svg')

  //   // clear all existing loaders.
  //   // if you don't do this, the loader below will be appended to
  //   // existing loaders of the rule.
  //   svgRule.uses.clear()

  //   // add replacement loader(s)
  //   svgRule
  //     .use('svg-sprite-loader')
  //     .loader('svg-sprite-loader')
  //       .options({
  //         extract: true
  //       })
  //       .end()
  //     .use('svgo-loader')
  //      .loader('svgo-loader')
  //   config.plugin('SpritePlugin')
  //     .use(SpritePlugin)
  // }
}
