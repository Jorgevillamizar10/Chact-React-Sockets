module.exports = {
    entry:__dirname + '/src',
    output:{
        path:'/',
        filename:'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query:{
                    presets: ["@babel/preset-env","@babel/preset-react"]
                }
            }
        ]
    }
};