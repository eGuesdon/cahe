var ExtractTextPlugin = require('extract-text-webpack-plugin') ;

module.exports = {
    entry: "./out/init.js",
    output: {
        filename: "./out/bundle.js"
    },
    module: {
        loaders: [
            /*{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },*/
            { 
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                // loader: "style-loader!css-loader" 
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
            /*
            {
                test: /\.less/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&localIdentName=less_[name]__[local]___[hash:base64:5]!less')
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=10000'
            }
            */
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    plugins: [
        new ExtractTextPlugin('./css/components/slideshow/style.css', { allChunks: true }),
        // new HtmlWebpackPlugin()
    ]
};