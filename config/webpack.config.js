const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: {
    main: "./src/js/index.js"
  },
  output: {
    path: path.join(__dirname, "../build"),
    filename: "[hash].bundle.js"
  },
  mode: "development",
  devServer: {
    static: {
        directory:path.join(__dirname, "../build"),
    },
    compress: true,
    port: 8888,
    // overlay: true
  },
//   devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader" // transpiling our JavaScript files using Babel and webpack
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          // "postcss-loader", // Loader for webpack to process CSS with PostCSS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader", // This will resolves import/require() on a file into a url and emits the file into the output directory.
            options: {
              name: "[name].[ext]",
              outputPath: "assets/"
            }
          },
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            // attrs: ["img:src", ":data-src"],
            minimize: true
          }
        }
      }
    ]
  },
  plugins: [
    // CleanWebpackPlugin will do some clean up/remove folder before build
    // In this case, this plugin will remove 'dist' and 'build' folder before re-build again
    new CleanWebpackPlugin(),
    // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        // browse to http://localhost:3000/ during development
        host: 'localhost',
        port: 8888,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3100/)
        // through BrowserSync
        files: "./index.html"
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: true
      }
    )
  ]
};