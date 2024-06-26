/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html'),
      title: 'Production',
      filename: 'index.html',
      manifest: './public/manifest.json',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.png', '.svg', '.webp'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                'targets': 'defaults' 
              }],
              ['@babel/preset-react', {'runtime': 'automatic'}],
              ['@babel/preset-typescript'],
            ]
          }
        }]
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|ico|webp)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 3000,
    hot: false,
    historyApiFallback: true,
  },
  entry: {
    app: './src/index',
    hot: 'webpack/hot/dev-server.js',
    client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
  },
};