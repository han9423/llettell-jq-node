const htmlPlugin = require("html-webpack-plugin");
const extractText = require("extract-text-webpack-plugin");
const cleanPlugin = require("clean-webpack-plugin");

module.exports = {
    entry : {
        index : "./www/src/js/index.js",
        secondPage : "./www/src/js/secondPage.js",
    },
    output : {
        filename : "[name].js",
        path : __dirname + "/www/dist/js"
    },
    devServer : {
        host : "localhost",
        compress : false,
        contentBase : "./www/dist",
        port :  3000,
    },
    module : {
        rules : [
            {
                test : /\.css$/g,
                use : extractText.extract({
                    fallback : "style-loader",
                    use : [
                        {
                            loader : "css-loader",
                        }
                    ]
                })
            },{
                test : /\.jpe?g|png|jpg$/g,
                use : [
                    {
                        loader : "url-loader",
                        options : {
                            limit : 5000,
                            outputPath : "/images/"
                        }
                    }
                ]
            },{
                test : /\.less$/g,
                use : extractText.extract({
                    fallback : "style-loader",
                    use : [
                        {
                            loader : "css-loader",
                            loader : "less-loader"
                        }
                    ]
                })
            },{
                test : require.resolve("jquery"),
                use : [
                    {
                        loader : "expose-loader",
                        options : "$",
                    },{
                        loader : "expose-loader",
                        options : "jQuery",
                    }
                ]
            },{
                test : /\.html$/g,
                use : [
                    {
                        loader : "html-withimg-loader"
                    }
                ]
            }
        ]
    },
    plugins : [
        new extractText("css/[name].css"),
        new htmlPlugin({
            template : "./www/src/build/index.ejs",
            filename : "./index.html",
            minify : {
                removeAttributeQuotes : true,
            },
            favicon : "./www/src/images/favicon-20180807105016823.ico",
            inject : "head",
            title : "inderEjs",
            hash : true,
        }),
        new htmlPlugin({
            template : "./www/src/build/secondPage.ejs",
            filename : "./views/secondPage.html",
            minify : {
                removeAttributeQuotes : true
            },
            favicon : "./www/src/images/favicon-20180807105016823.ico",
            inject : "foot",
            chunks : ["secondPage"],
            hash : true,
        })
    ]        
}

