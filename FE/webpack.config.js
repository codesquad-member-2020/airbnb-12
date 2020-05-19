const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
    mode: env.mode,
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[hash].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        historyApiFallback: true,
        open: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            "@": path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            }
        ]
    }
});
