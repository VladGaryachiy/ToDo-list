const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    /*в entry указаны файлы которые надо изменить*/
    entry: [
        './src/js/index.js',
        './src/scss/style.scss'
    ],
    output: {
        filename: './js/bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            /*Насторйка js*/
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: 'env'
                    }
                }
            },
            /*Настройка css*/
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, 'src/scss'),
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            minimize: true,
                            url: false
                        }
                    },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "raw-loader",
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './css/style.bundle.css', /*в етом файле все переобразованые файлы scss*/
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
            filename: "./index.html"
        }),
       /* new CopyWebpackPlugin([{
            from: './src/fonts',
            to: './fonts'
        },

        {
            from: './src/img',
            to: './img'
        }
        ])*/
    ]
};