const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports ={
    entry:{
        main:`${__dirname}/src/js/app.js`,
        
       
    },
    mode:'development',
    output:{
        path:`${__dirname}/dist`,
        filename:'bundle.js',
        clean:true
    },

    plugins: [new MiniCssExtractPlugin()],

    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    //MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(ttf|woff|svg|eot|woff2|png|jpg|jpeg)$/,
                use:[
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
    }




}