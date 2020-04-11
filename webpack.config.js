const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  watch: true,
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        // Uses babel-loader to transpile pre-ES6 files.
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  // Cleans up old prod files on build:prod
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'My Awesome application',
      myPageHeader: 'Hello World',
      template: './src/index.html',
      filename: './index.html', //relative to root of the application
    }),
  ],
  output: {
    // Adds a hash to prod files to invalidate cache when new builds arrive.
    filename: isDevelopment ? '[name].js' : '[name].[hash].js',
  },
  resolve: {
    // Allows us to omit extensions in imports
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
