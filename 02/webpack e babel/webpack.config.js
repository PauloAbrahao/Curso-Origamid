
module.exports = {
    devServer: {
        static: './',
    },
    module: {
        // Aplica as seguintes regras 
        rules: [{
            // nos arquivos que terminam com '.js'
            test: /\.js$/,
            // nao procura nada em 'node_modules'
            exclude: /node_modules/,
            use: {
                // babel
                loader: 'babel-loader',
                // com as opcoes padroes para react 
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }],
    }
}   