var webpack = require('webpack');

module.exports = {
    entry: './client/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist' 
    },
    watch: true,
    devServer: {
        contentBase: __dirname + '/dist/',
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
