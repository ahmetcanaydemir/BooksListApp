module.exports = {
  context: __dirname + "/app",
  entry: "./app.js",
  output: {
    path: __dirname + "/app/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "angularjs-template-loader",
        options: {
          relativeTo: __dirname + "app/dist"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.html$/,
        use: ["raw-loader"]
      }
    ]
  }
};
