var path = require('path');
var webpack = require('webpack');
var merge = require('merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

if (process.env.NODE_ENV === 'production') {

    webpackConfig = merge(webpackConfig, {
        entry: [
            './src/client/index.js'
        ],
        module: {
            loaders: [{
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname
            },
                {test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
                {test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader!style-loader', 'css-loader?sourceMap')}
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new ExtractTextPlugin("app.css"),
            new webpack.optimize.UglifyJsPlugin({minimize: true})
        ]
    });

} else {

    webpackConfig = merge(webpackConfig, {
        devtool: 'inline-source-map',
        module: {
            loaders: [{
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    optional: ['runtime'],
                    stage: 1,
                    env: {
                        development: {
                            plugins: [
                                'react-transform'
                            ],
                            extra: {
                                'react-transform': {
                                    transforms: [{
                                        transform: 'react-transform-hmr',
                                        imports: ['react'],
                                        locals: ['module']
                                    },
                                        {
                                            transform: 'react-transform-catch-errors',
                                            imports: ['react', 'redbox-react']
                                        }
                                    ]
                                }
                            }
                        }
                    }
                }
            },
                {test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
                {test: /\.css$/, loader: 'style-loader!css-loader'}
            ]
        },
        entry: [
            'webpack-hot-middleware/client?reload=true',
            './src/client/index.js'
        ],
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                "process.env": {
                    BROWSER: JSON.stringify(true)
                }
            })
        ]
    });

}

module.exports = webpackConfig;