

module.exports = {
  publicPath: '/', // Default '/'
  outputDir: 'dist', // Default: 'dist'
  assetsDir: 'static',
  productionSourceMap: true,
  devServer: {
    host: 'localhost',
    hot: true,
    open: true,
    proxy: 'https://baitai1688.com',  //目标接口域名
  },
  lintOnSave: false,
}