const path = require('path');



module.exports = {
    mode: 'production',
    entry : {
        bundle : './src/index.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    target:"node",
    module : {
        rules : [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules/'
            },
            {
                use: [
                    'style-loader',
                    'css-loader',
                ],
                test: /\.css$/
            },
            {
                loader: 'file-loader',
                test: /\.(png|jpg|gif)$/
            }
        ]
    }
}