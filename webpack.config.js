var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname,'src','index.js'),
    output: {
        path: path.join(__dirname,'/public/js/'),
        publicPath: 'js/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/,/public/],
                loader: ["react-hot-loader","babel-loader"]
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/, /public/],
                loader: ["style-loader","css-loader","autoprefixer-loader","resolve-url"]
            },
            {
                test: /\.sass$/,
                exclude: [/node_modules/, /public/],
                loader: ["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
}