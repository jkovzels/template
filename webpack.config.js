// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin } = require('awesome-typescript-loader');

const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const sassLoaders = [
	'css-loader?sourceMap',
	'sass-loader?includePaths[]=' + resolve(__dirname, './src/styles')
];

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index',
	]
	, output: {
		filename: 'bundle.js'
		, path: resolve(__dirname, './public/')
		, publicPath: '/public/'
	}
	, devServer: {
		devServer: {
			publicPath: '/public/',
			colors: true,
			hot: true,
			inline: true,
			progress: true,
			historyApiFallback: true,
		},
	}
	, module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'awesome-typescript-loader',
				exclude: /node_modules/,
			}
			, {
				enforce: 'pre',
				test: /\.js$/,
				use: "source-map-loader",
				exclude: /node_modules/,
			}
			, {
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: sassLoaders })
			}
		]
	}
	, resolve: {
		extensions: ['.webpack.js', '.html', '.ts', '.tsx', '.js', '.jsx', '.scss']
	}
	, devtool: 'inline-source-map'

	, plugins: [
		new CheckerPlugin()
		, new webpack.HotModuleReplacementPlugin() // enable HMR globally
		, new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
		, new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true })
	]
};
