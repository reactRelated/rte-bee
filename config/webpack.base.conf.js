const path = require('path')
const utils = require('./utils')
const projectConfig = require('./project.config.js')
const debug = require('debug')('app:config:webpack.base.conf');
const webpack = require('webpack');


module.exports = {
    entry: {
        app: projectConfig.paths.src('main.js')
    },
    output: {
        path: projectConfig.paths.dist(),
        filename: utils.assetsPath(`js/[name].${projectConfig.compiler_hash_type}.js`),
        chunkFilename: utils.assetsPath(`js/[name].${projectConfig.compiler_hash_type}.js`)
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: [projectConfig.paths.src()]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin(projectConfig.globals)
        /*new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function(){
                    return [
                        require("autoprefixer")({
                            browsers: ["> 1%",
                                "last 10 versions",
                                "not ie <= 8"]
                        })
                    ]
                }
            }
        }),*/
    ]
};
