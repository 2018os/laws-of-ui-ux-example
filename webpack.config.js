const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,

  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },

  devServer: {
    contentBase: __dirname + "/build",
    inline: true,
    hot: true,
    host: "localhost",
    port: 3000,
    open: true,
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
  ],
};
