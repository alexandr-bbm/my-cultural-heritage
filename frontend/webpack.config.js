'use strict';
var ISDEV = process.env.NODE_ENV === 'development';
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
require('es6-promise').polyfill();

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './build/'),
        filename: '[name].min.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].min.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader!postcss!sass-loader?outputStyle=expanded'
                )
            },
            {
                test: /\.(ttf|eot|woff|svg|png|jpg|gif)/,
                loader: 'url?limit=8000&name=./assets/[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader!postcss!'
                )
            },
            { test: /\.json$/, loader: 'json' },
        ]
    },

    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],

    resolve: {
        modulesDirectories: ['src', 'node_modules'],
        extensions: ['', '.js', '.jsx', '.json']
    },

    devtool: 'inline-source-map',
    watch: ISDEV,
};
if (!ISDEV) {
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        sourceMap: false,
        compress: {
            sequences: true,  // join consecutive statemets with the “comma operator”
            properties: true,  // optimize property access: a["foo"] → a.foo
            dead_code: true,  // discard unreachable code
            drop_debugger: true,  // discard “debugger” statements
            unsafe: false, // some unsafe optimizations (see below)
            conditionals: true,  // optimize if-s and conditional expressions
            comparisons: true,  // optimize comparisons
            evaluate: true,  // evaluate constant expressions
            booleans: true,  // optimize boolean expressions
            loops: true,  // optimize loops
            unused: true,  // drop unused variables/functions
            hoist_funs: true,  // hoist function declarations
            hoist_vars: false, // hoist variable declarations
            if_return: true,  // optimize if-s followed by return/continue
            join_vars: true,  // join var declarations
            cascade: true,  // try to cascade `right` into `left` in sequences
            side_effects: true,  // drop side-effect-free statements
            warnings: true,  // warn about potentially dangerous optimizations/code
            global_defs: {}     // global definitions
        }
    }));
}
