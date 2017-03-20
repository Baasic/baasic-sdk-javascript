var path = require('path');
var rootDir = path.resolve(__dirname);

function getRootPath() {
    var args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [rootDir].concat(args));
}

module.exports = {
    /**
     * Path from which all relative webpack paths will be resolved.
     */
    context: path.resolve(__dirname),
    /**
     * Entry point to the application, webpack will bundle all imported modules.
     */
    entry: './src/index.ts',
    /**
     * Rule for which files should be transpiled via typescript loader.
     */
    module: {
        rules: [{
            test: /\.ts$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    compilerOptions: {
                        "importHelpers": true,
                        "noEmitHelpers": true
                    }
                }
            }]
        }]
    },
    resolve: {
        /**
         * Resolve the following extensions when requiring/importing modules.
         */
        extensions: ['.ts', '.js'],
        /**
         * Resolve modules using following folders.
         */
        modules: [getRootPath('src'), getRootPath('node_modules')]
    },
    /**
     * Specify output as an UMD library.
     */
    output: {
        path: 'build/dist',
        filename: 'baasic-sdk-javascript.js',
        library: 'baasicSdkJavaScript',
        libraryTarget: 'umd'
    }
}