const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    main: './src/app/main.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: '/js/',
  },
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  module: {
    rules: [{
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([{
      from: 'src/',
      to: path.resolve(__dirname, 'dist/'),
      ignore: ['app/**/*'],
    }]),
  ],
  devtool: "source-map", // enum
  serve: {
    open: true,
    content: path.resolve(__dirname, 'src/'),
    devMiddleware: {
      publicPath: '/js/',
    },
    clipboard: false,
  },
};
