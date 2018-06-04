'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    'babel-polyfill': 'babel-polyfill',
    'whatwg-fetch': 'whatwg-fetch',
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: vueLoaderConfig
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        include: [
          resolve('src'), 
          resolve('test'), 
          resolve('node_modules/webpack-dev-server/client'),
          resolve('node_modules/vue-analytics'),
          resolve('node_modules/vue-awesome'),
          resolve('node_modules/vue-awesome-swiper'),
          resolve('node_modules/vue-backtotop'),
          resolve('node_modules/vue-breakpoints'),
          resolve('node_modules/vue-good-table'),
          resolve('node_modules/vue-i18n'),
          resolve('node_modules/vue-material'),
          resolve('node_modules/vue-meta'),
          resolve('node_modules/vue-nav-tabs'),
          resolve('node_modules/vue-recaptcha'),
          resolve('node_modules/vue-video-player'),
          resolve('node_modules/vue2-google-maps'),
          resolve('node_modules/vuelidate'),
        ],
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: [
      //       {
      //           loader: 'vue-style-loader',
      //       },
      //       {
      //           loader: 'css-loader',
      //           options: {
      //               importLoaders: 1,
      //           }
      //       },
      //       {
      //           loader: 'postcss-loader'
      //       }
      //   ]
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
