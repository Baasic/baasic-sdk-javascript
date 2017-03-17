var TypedocWebpackPlugin = require('typedoc-webpack-plugin');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var path = require('path');

module.exports = function () {
    var typeDocConfig = {
        out: './docs',
        module: 'commonjs',
        target: 'es5',
        ignoreCompilerErrors: true,
        exclude: '**/node_modules/**/*.*',
        experimentalDecorators: true,
        excludeExternals: true
    };

    console.log(`Theme: ${process.env.npm_config_theme}`);
    if (process.env.npm_config_theme) {
        typeDocConfig.theme = process.env.npm_config_theme;
    }

    return webpackMerge(commonConfig, {
        plugins: [
            new TypedocWebpackPlugin(typeDocConfig, './src')
        ]
    });
};