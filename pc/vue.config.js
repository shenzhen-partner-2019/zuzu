module.exports = {
  publicPath: '/', // Default '/'
  outputDir: 'dist', // Default: 'dist'
  assetsDir: 'static',
  productionSourceMap: true,
  devServer: {
    host: '127.0.0.1',
    hot: true,
    open: true,
    proxy: '',  //目标接口域名
    proxy: {
      '/api': {
        //接口地址
        target: 'https://baitai1688.com/admin/api',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
        }
      }
    }
  },
  lintOnSave: false,
}