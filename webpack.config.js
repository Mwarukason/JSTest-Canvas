module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8000/build/'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/ /*stop run the whole package*/
     },
     {
      test: /\.(jpe?g|png)$/i,
      //include : path.join(__dirname, 'images'),
      loader  : 'url-loader?limit=30000&name=images/[name].[ext]'
    } // inline base64 URLs for <=30k images, direct URLs for the rest
    ]
  },


  /*webpack use*/
  devServer:{
    port:8000,
    contentBase: './build',
    inline:true /*allows to run automatic web updates*/
  }
}
