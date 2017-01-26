const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname),
    entry: './src/app.js',
    resolve: {
        modules: [
            './node_modules/',
            '~materialize-css/sass'
        ],
        alias: {
            'jquery': 'materialize-css/node_modules/jquery/dist/jquery.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: './src/',
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader', 'sass-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
                })
            },
            {
                test: /\.(jpg|svg|png|gif)$/,
                loader: {
                    'loader': 'file-loader',
                    options: {
                        name: 'Images/[hash].[ext]'
                    }
                }
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        mimetype: 'application/font-woff',
                        publicPath: '/_Resources/Static/Packages/Techwatch.Hermes/',
                        name: 'Fonts/[hash].[ext]'
                    }
                }
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_Resources/Static/Packages/Techwatch.Hermes/',
                        name: 'Fonts/[hash].[ext]'
                    }
                }
            }
        ]
    },
    output: {
        path: './dist/',
        filename: 'app.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery'
        }),
        new ExtractTextPlugin('app.css')
    ]
};

