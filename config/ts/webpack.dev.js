const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

let mainConfig = {
    mode: 'development',
    entry: path.resolve(__dirname, '..', 'src/main/main.ts'),
    target: 'electron-main',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, '..', 'dist'),
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    resolve: {
        extensions: ['.js', '.json', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.(jpg|png|svg|ico|icns)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
};

let rendererConfig = {
    mode: 'development',
    entry: path.resolve(__dirname, '..', 'src/renderer/renderer.tsx'),
    target: 'electron-renderer',
    output: {
        filename: 'renderer.bundle.js',
        path: path.resolve(__dirname, '..', 'dist'),
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader?sourceMap',
                    'sass-loader?sourceMap',
                ],
            },
            {
                test: /\.(jpg|png|svg|ico|icns)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'src/renderer/index.html'),
        }),
    ],
};

module.exports = [mainConfig, rendererConfig];
