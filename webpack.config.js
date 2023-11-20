const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        entry: "./src/client/index.tsx",
        mode: "development",
        target: "web",
        output: {
            path: path.resolve(__dirname, "dist/client"),
            filename: "client_bundle.js",
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: "./src/client/index.html",
            })
        ],
        resolve: {
            extensions: [".js", ".ts", ".tsx", ".jsx"],
        },
        module: {

                rules: [
                    {
                        test: /\.(ts|tsx)$/,
                        exclude: /node_modules/,
                        use: 'ts-loader',
                    },
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader', 
                            options: {
                                presets: ['@babel/preset-env', '@babel/preset-typescript ', '@babel/preset-react']
                            }
                        }
                    },
                    {
                        test: /\.css$/,
                        exclude: /node_modules/,
                        use: ['style-loader', 'css-loader']
                    },
                    {
                        test: /\.(png|svg|ttf)$/,
                        type: "asset/resource",
                    },
                ]
            }
    }
];