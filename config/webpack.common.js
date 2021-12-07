const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const tsRules = {
	test: /\.tsx?$/,
	exclude: /node_modules/,
	loader: 'babel-loader',
}

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: '[name].[contenthash].js',
	},
	module: {
		rules: [tsRules],
	},
	resolve: {
		plugins: [new TsconfigPathsPlugin()],
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	optimization: {
		minimizer: [new TerserPlugin()],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			favicon: './public/images/favicon-32x32.png',
			title: 'Frontend Mentor | Calculator app',
			template: './public/index.html',
		}),
	],
}
