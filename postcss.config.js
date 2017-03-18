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


/*
module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {}
  }
}
*/
