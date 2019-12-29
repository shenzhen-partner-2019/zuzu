module.exports = {
  publicPath: '/', // Default '/'
  outputDir: 'dist', // Default: 'dist'
  assetsDir: 'static',
  productionSourceMap: true,
  devServer: {
    host: '127.0.0.1',
    hot: true,
    open: true,
    proxy: 'https://baitai1688.com/admin/api',  //目标接口域名
  },
  lintOnSave: false,
}