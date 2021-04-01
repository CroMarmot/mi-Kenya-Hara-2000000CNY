const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('mi-kenya-hara-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: false,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\\.(js|jsx)$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [ 'style-loader','css-loader', 'mi-kenya-hara-webpack-plugin'],
            },
            {
                test: /\.less$/i,
                use: ['style-loader','css-loader','less-loader', 'mi-kenya-hara-webpack-plugin'],
            },
        ],
    },
};
