const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJs = require('./webpack/js.uglify');
const images = require('./webpack/image');
const fontLoader = require('./webpack/font-loader');
const babel = require('./webpack/babel');
const htmlLoader = require('./webpack/html-loader');
const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            "index":PATHS.source + '/index.js'
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/index.html'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    htmlLoader(),
    babel(),
    images()
]);

module.exports = function (env) {
    if (env === 'production'){
        return merge([
            common,
            extractCSS(),
            uglifyJs(),
            fontLoader()
        ]);
    }
    if (env === 'development'){
        return merge([
            common,
            babel(),
            devserver(),
            sass(),
            css(),
            fontLoader()
        ])
    }
};