const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');


module.exports = {
    /*в entry указаны файлы которые надо переобразовать*/
    entry: [
        './src/js/index.js',
        './src/scss/style.scss'
    ],
    output: {
        filename: './js/bundle.js'
    },
    devServer: { /*overlay - удобный показ ошибки*/
        overlay: {
            warnings: true,
            errors: true
        },

    },
    devtool: "source-map",
    module: {
        rules: [
            /*Насторйка js*/
            {
                test: /\.js$/, /*все js файлы перегнать через babel-loader*/
                include: path.resolve(__dirname, 'src/js'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: 'env' /*дополнительные опции которые мы можем установить*/
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
            /*настройка html*/
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
        new CopyWebpackPlugin([{   /*переобразование всего остпльного, картинки, иконки и т.д*/
            from: './src/fonts',
            to: './fonts'
        },

        {
            from: './src/img',
            to: './img'
        }
        ],{
            ignore: [ '*.js', '*.css' ]
        }),
      /*  new ErrorOverlayPlugin()*/
    ]
};