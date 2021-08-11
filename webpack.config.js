const path = require('path');
const autoprefixer = require("autoprefixer");
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  plugins: [
    new ExtractCssChunks({
      filename: "bundle.css",
      chunkFilename: "bundle.css",
    }),
  ],
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        // test: /\.css$/,
        test: /\.(s[ac]|c)ss$/i,
        use: ['style-loader', ExtractCssChunks.loader, 'css-loader', "postcss-loader", "sass-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: false,
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ]
      }
    ]
  },
};