import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: path.join(path.resolve(path.dirname(""), "src", "index.tsx")),
  output: {
    path: path.resolve(path.resolve(path.dirname(""), "dist")),
  },
  module: {
    rules: [
      {
        test: /\.?ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: { node: "current" } }],
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.?tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: { node: "current" } }],
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(
        path.resolve(path.dirname(""), "public", "index.html")
      ),
    }),
  ],
};
