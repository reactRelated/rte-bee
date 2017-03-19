// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
    plugins: [
        require('autoprefixer')({
            "browserlist": [
                "> 1%",
                "last 10 versions",
                "not ie <= 8"
            ]
        })
    ]
}
