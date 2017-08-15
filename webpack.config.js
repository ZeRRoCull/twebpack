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
            { test: /\.js$/, exclude: [/node_modules/,/public/], loader: "babel-loader" }
        ]
    }
}