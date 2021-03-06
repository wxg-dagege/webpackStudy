const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
        new CleanWebpackPlugin()
    ]
}