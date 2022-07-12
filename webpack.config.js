module.exports = {
  devtool: 'source-map',
  watch: true,
  entry: {
    filename: './app.js'
  }, 
  output: {
    filename: './bundle.js'
  },
   module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      },{
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }
    ]
  }
}