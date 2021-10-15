const Webpack = require('webpack')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const paths = require('../paths')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    target: 'web',
    output: {
        filename: 'js/[name].js',
        path: paths.appBuild,
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        compress: true,
        open: true,
        hot: true,
        inline: true,
        host: '0.0.0.0',
        proxy: {
            ...require(paths.appProxySetup),
        },
    },
    plugins: [new Webpack.HotModuleReplacementPlugin(), new ErrorOverlayPlugin()],
    optimization: {
        minimize: false,
        minimizer: [],
        splitChunks: {
            chunks: 'all',
            minSize: 0,
        },
    },
})
