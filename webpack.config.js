var webpack = require("webpack");

module.exports = {
    entry: "./out/init.js",
    output: {
        filename: "./out/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};