const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "none",
    entry: {
       index: ["@babel/polyfill", "./src/app/scripts/index.js"],
         index: {import: "./src/app/styles/index.css",}
      },
      output: {
        path: path.resolve(__dirname, "build"),
        filename: "js/app.bundle.js",
      },
    module: {
      rules: [
        {
          test: /\.js$/, // Patrón de archivos que se deben procesar
          exclude: /node_modules/, // Carpeta a excluir
          use: {
            loader: 'babel-loader', // Cargador a utilizar
            options: {
              presets: ['@babel/preset-env'] // Opciones para el cargador
            }
          }
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: 
            ["file-loader?name=assets/[name].[ext]",  "image-webpack-loader", ]

        },
        {
          test: /\.(ttf|woff)$/i,
          use: ["file-loader?name=assets/[name].[ext]",
          ]
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, "src/app"),
        use: ["html-loader"],
      },
      ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/app.bundle.css",
          }),
      new HTMLWebpackPlugin({
        hash: true,
        template: "./src/index.html",
       filename: "index.html",
       chunks: ["index"],
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
      }),
    ],
  };