var UglifyJsPlugin = require('webpack-uglify-js-plugin');
var TypedocWebpackPlugin = require('typedoc-webpack-plugin');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var path = require('path');

module.exports = webpackMerge(commonConfig, {
    plugins: [
        /**
         * Minimize bundled output.
         */
        new UglifyJsPlugin({
            cacheFolder: path.resolve(__dirname, 'build', 'cached_uglify'),
            debug: false,
            minimize: true,
            sourceMap: false,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            }
        }),
        new TypedocWebpackPlugin({
            out: './docs',
            module: 'commonjs',
            target: 'es5',
            exclude: '**/node_modules/**/*.*',
            experimentalDecorators: true,
            excludeExternals: true
        }, './src')
    ]
});