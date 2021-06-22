module.exports={
    devServer: {
        host:'0.0.0.0',
        proxy: {
            '/v1': {
                target: 'http://localhost:2664',
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/v1': '/api'
                }
            },
            '/api': {
                target: 'http://blog.xhxiehuan.club:2664',
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }
}