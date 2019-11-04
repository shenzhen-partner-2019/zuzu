

module.exports = {
  publicPath: '/', // Default '/'
  outputDir: 'dist', // Default: 'dist'
  assetsDir: 'static',
  productionSourceMap: true,
  devServer: {
    host: 'localhost',
    hot: true,
    open: true,
  },
  lintOnSave: false,
}