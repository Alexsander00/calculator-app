const { merge } = require('webpack-merge')

const common = require('./webpack.common')

const devConfig = {
	mode: 'development',
	devServer: {
		static: '../build',
		open: true,
		hot: true,
	},
	target: 'web',
}

module.exports = merge(common, devConfig)
