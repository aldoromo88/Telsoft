"use strict";

var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var devConfig = require("./build/webpack.dev.conf");
var prodConfig = require("./build/webpack.prod.conf");

module.exports = isDevBuild ? devConfig : prodConfig;

//const path = require('path');
//const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const bundleOutputDir = './wwwroot';
//const vueLoaderConfig = require('./build/vue-loader.conf')
//const utils = require('./build/utils')

//function resolve(dir) {
//    return path.join(__dirname, '..', dir)
//}

//module.exports = (env) => {
//    const isDevBuild = !(env && env.prod);

//    return [{
//        stats: { modules: false },
//        context: __dirname,
//        entry: { 'main': './ClientApp/boot.ts' },
//        entry: {app: './src/main.js'},
//        module: {
//            rules: [
//                {
//                    test: /\.(js|vue)$/,
//                    loader: 'eslint-loader',
//                    enforce: 'pre',
//                    include: [resolve('src'), resolve('test')],
//                    options: {
//                        formatter: require('eslint-friendly-formatter')
//                    }
//                },
//                {
//                    test: /\.vue$/,
//                    loader: 'vue-loader',
//                    options: vueLoaderConfig
//                },
//                {
//                    test: /\.js$/,
//                    loader: 'babel-loader',
//                    include: [resolve('src'), resolve('test')]
//                },
//                {
//                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//                    loader: 'url-loader',
//                    options: {
//                        limit: 10000,
//                        name: utils.assetsPath('img/[name].[hash:7].[ext]')
//                    }
//                },
//                {
//                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
//                    loader: 'url-loader',
//                    options: {
//                        limit: 10000,
//                        name: utils.assetsPath('media/[name].[hash:7].[ext]')
//                    }
//                },
//                {
//                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
//                    loader: 'url-loader',
//                    options: {
//                        limit: 10000,
//                        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
//                    }
//                }
//            ]
//        },
//        output: {
//            path: path.join(__dirname, bundleOutputDir),
//            filename: '[name].js',
//            publicPath: '/dist/'
//        },
//        resolve: {
//            extensions: ['.js', '.vue', '.json'],
//            alias: {
//                'vue$': 'vue/dist/vue.esm.js',
//                '@': resolve('src')
//            }
//        },
//        plugins: [
//            new webpack.DefinePlugin({
//                'process.env': {
//                    NODE_ENV: JSON.stringify(isDevBuild ? 'development' : 'production')
//                }
//            })
//        ].concat(isDevBuild ? [
//            // Plugins that apply in development builds only
//            new webpack.SourceMapDevToolPlugin({
//                filename: '[file].map', // Remove this line if you prefer inline source maps
//                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
//            })
//        ] : [
//                // Plugins that apply in production builds only
//                new webpack.optimize.UglifyJsPlugin(),
//                new ExtractTextPlugin('site.css')
//            ])
//    }];
//};

