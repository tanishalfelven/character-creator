var path = require("path"),
    
    CSSPlugin = require("modular-css-webpack/plugin");
 
module.exports = {
    entry   : "./src/index.js",
    output  : {
        "path"     : "./gen",
        "filename" : "index.js"
    },
    module : {
        rules : [{
            test : /\.css$/,
            use  : "modular-css-webpack/loader"
        }]
    },
    plugins : [
        new CSSPlugin({
            css  : "./index.css",
            json : "./classes.json"
        })
    ]
};