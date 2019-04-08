'use strict'

process.env.BABEL_ENV = 'renderer'

const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const SpritePlugin = require('svg-sprite-loader/plugin')
const postcssPresetEnv = require('postcss-preset-env')

const { dependencies } = require('./package.json')
const proMode = process.env.NODE_ENV === 'production'

const whiteListedModules = ['vue']

const rendererConfig = {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  entry: {
    renderer: path.join(__dirname, './src/main.js')
  },
  externals: [
    ...Object.keys(dependencies || {}).filter(d => !whiteListedModules.includes(d))
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'docs'),
    publicPath: proMode ? 'https://marktext.app/' : '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter'),
            failOnError: true
          }
        }
      },
      {
        test: /(katex|github\-markdown|prism[\-a-z]*|\.theme)\.css$/,
        use: [
          'to-string-loader',
          'css-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /(katex|github\-markdown|prism[\-a-z]*|\.theme)\.css$/,
        use: [
          proMode ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: {
            ident: 'postcss',
            plugins: () => [
              postcssPresetEnv({
                stage: 0
              })
            ]
          } }
        ]
      },
      {
        test: /\.html$/,
        use: 'vue-html-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.node$/,
        use: 'node-loader'
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            sourceMap: true
          }
        }
      },
      {
        test: /\.svg$/,
        exclude: /\.image\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              publicPath: './static/'
            }
          },
          'svgo-loader'
        ]
      },
      {
        test: /\.(image\.svg|png|jpe?g|gif)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'imgs/[name]--[folder].[ext]'
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name]--[folder].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 100,
            name: 'fonts/[name]--[folder].[ext]'
          }
        }
      }
    ]
  },
  node: {
    __dirname: !proMode,
    __filename: !proMode
  },
  plugins: [
    new SpritePlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: path.resolve(__dirname, './public/favicon.png'),
      template: path.resolve(__dirname, './public/index.html'),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      },
      nodeModules: process.env.NODE_ENV !== 'production'
        ? path.resolve(__dirname, './node_modules')
        : false
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'components': path.join(__dirname, './src/components'),
      'themes': path.join(__dirname, './src/themes'),
      'markdown': path.join(__dirname, './src/markdowns'),
      'assets': path.join(__dirname, './src/assets')
    },
    extensions: ['.js', '.vue', '.json', '.css', '.node']
  }
}

/**
 * Adjust rendererConfig for development settings
 */
if (!proMode) {
  rendererConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}

/**
 * Adjust rendererConfig for production settings
 */
if (proMode) {
  rendererConfig.devtool = '#nosources-source-map'
  rendererConfig.mode = 'production'
  rendererConfig.plugins.push(
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  )
}

module.exports = rendererConfig
