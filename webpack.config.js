const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],

  resolve: {
    alias: {
      comp: path.resolve(__dirname, "src/components/"),
    },
    extensions: [".js", ".jsx", ".css", ".png"],
  },

  performance: {
    hints: process.env.NODE_ENV === "production" ? "error" : false,

    maxEntrypointSize: 580000,
    maxAssetSize: 580000,
  },

  devtool: "source-map",
};
