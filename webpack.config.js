const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcPath = path.join(__dirname, 'src');

module.exports = {
    cache: true,
    debug: true,
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    eslint: {
        configFile: '.eslintrc',
        emitError: true,
        failOnError: true,
        failOnWarning: false,
        formatter: require('eslint-friendly-formatter')
    },
    externals: {},

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.template.ejs',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        preLoaders: [
            {
                include: [path.resolve(__dirname, 'src')],
                loader: 'eslint',
                // Exclude tests from eslint
                exclude: [/__tests__/],
                test: /\.(js|jsx)$/
            }
        ],
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory' },
            { test: /\.scss$/, include: /src/, loaders: ["style", "css", "sass?sourceMap"] },
            { test: /\.css$/, include: /node_modules/, loaders: ["style", "css"] },
            { test: /\.woff(\?.*)?$/,  loader: 'url?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff' },
            { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff2' },
            { test: /\.otf(\?.*)?$/,   loader: 'file?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=font/opentype' },
            { test: /\.ttf(\?.*)?$/,   loader: 'url?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=fonts/[name].[ext]' },
            { test: /\.svg(\?.*)?$/,   loader: 'url?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml' },
            { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' },
            { test: /\.json$/, loader: 'json' }
        ]
    },
    output: {
        filename: 'movie-application.js',
        library: 'movie-application',
        libraryTarget: 'umd',
        path: path.join(__dirname, 'dist'),
        umdNamedDefine: true,
        publicPath: '/'
    },
    resolve: {
        root: srcPath,
        alias: {
            'react': path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['', '.js'],
    },
    devServer: {
        contentBase: './tmp',
        historyApiFallback: true,
        port:'8081'
    }
};
