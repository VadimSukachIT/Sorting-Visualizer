const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.tsx',
    },
    output: {
        filename: 'build/app.js',
        path: path.resolve(__dirname, './public'),
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: './public',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.less', '.css']
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: 'ts-loader'},
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ],
            },
        ]

    }
};