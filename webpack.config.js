const path = require("path")

const fromAppPath = (...paths) => path.join.apply(null, [__dirname, "app"].concat(paths))

module.exports = {
    entry: fromAppPath("Index.jsx"),
    output: {
        path: path.join(__dirname, "public/dist"),
        publicPath: "/dist",
        filename: "bundle.js"
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./public",
        port: 8002,
        host: "0.0.0.0",
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpeg|svg|jpg)$/,
                use: "file-loader?name=assets/[name].[ext]"
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        alias: {
            services: fromAppPath("services"),
            components: fromAppPath("components"),
            storage: fromAppPath("storage"),
            utils: fromAppPath("utils"),
            styles: fromAppPath("styles"),
            assets: fromAppPath("assets"),
            pages: fromAppPath("pages")
        }
    }
}