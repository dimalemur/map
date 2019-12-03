module.exports = {
    entry:'./src/client/index.js',
    output: {
        path: __dirname + '/public/build',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    }
};