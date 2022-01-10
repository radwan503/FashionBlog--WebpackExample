const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: `${__dirname}/src/js/app.js`,
    },
    mode: 'development',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    //MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(ttf|woff|svg|eot|woff2|png|jpg|jpeg)$/,
                use: [
                    'url-loader',
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader",
                options: {
                    outputPath: "../fonts",
                }
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),

        new HtmlWebpackPlugin({
            title: 'just a demo',
            filename: 'index.html',
            template: `${__dirname}/src/index.html`

        }),
        new HtmlWebpackPlugin({
            title: 'just a demo',
            filename: 'fashion.html',
            template: `${__dirname}/src/fashion.html`

        }),

        new HtmlWebpackPlugin({
            title: 'just a demo',
            filename: 'photoshotting.html',
            template: `${__dirname}/src/photoshotting.html`

        }),

        new HtmlWebpackPlugin({
            title: 'just a demo',
            filename: 'photography.html',
            template: `${__dirname}/src/photography.html`

        }),

        new HtmlWebpackPlugin({
            title: 'just a demo',
            filename: 'editor-choice.html',
            template: `${__dirname}/src/editor-choice.html`

        }),

        new HtmlWebpackPlugin({
            title: 'just a demo',
            filename: 'contact.html',
            template: `${__dirname}/src/contact.html`

        }),

    ]

}