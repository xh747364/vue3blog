module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '谢欢的个人主页-欢生活-欢空间'
                return args
            })
    },
    devServer: {
        host: '0.0.0.0',
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