module.exports = {
  publicPath: '/', // Default '/'
  outputDir: 'dist', // Default: 'dist'
  assetsDir: 'static',
  productionSourceMap: true,
  devServer: {
    host: '127.0.0.1',
    hot: true,
    open: true,
    proxy: {
      '/admin/api': {
        //接口地址
        target: 'https://baitai1688.com/admin/api',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/admin/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
        }
      }
    }
  },
  lintOnSave: false,
}