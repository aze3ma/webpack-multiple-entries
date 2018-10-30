const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
  entry: {
		main: './src/index.js',
		projectOne: './src/project-01/src/index.js',
		projectTwo: './src/project-02/src/index.js'
	},
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[id].js'
	},
	devServer: {
    contentBase: 'public'
  },
	module: {
		rules: [
			{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
			},
			{
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=8192&name=images/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
      }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.html'
		}),
	]
}
