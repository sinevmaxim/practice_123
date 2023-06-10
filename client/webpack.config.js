import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export const webpackConfig = {
    entry: {
        main: path.join(fileURLToPath(import.meta.url), '../src/index.js'),
    },
    output: {
        path: path.join(fileURLToPath(import.meta.url), '../dist'),
        filename: 'index.[hash].js',
    },
    devServer: {
        port: 4444,
        watchContentBase: true,
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exlude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
};
