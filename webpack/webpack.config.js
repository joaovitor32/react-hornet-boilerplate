import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: path.join(path.resolve(path.dirname(""), "src", "index.tsx")),
  output: {
    path: path.resolve(path.resolve(path.dirname(""), "dist")),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(
        path.resolve(path.dirname(""), "public", "index.html")
      ),
    }),
  ],
};
