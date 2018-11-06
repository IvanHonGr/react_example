const path = require('path');

module.exports = {
  context: __dirname + '/src/js',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
	extensions: ['.js', '.jsx']
  },
  devServer: {
	contentBase: [
	  __dirname + '/dist',
	  __dirname + '/src/static']
  },
  module: {
  rules: [
    {
	  test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
          plugins: ["transform-class-properties"]
        },
      }
    }
   ]
  }

};
