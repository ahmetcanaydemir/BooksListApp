module.exports = {
  context: __dirname + "/app",
  entry: "./app.js",
  output: { path: __dirname + "/app/dist", filename: "bundle.js" },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.css$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }] },
      { test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.html$/, loader: 'html-loader' }
    ]
  }
};
