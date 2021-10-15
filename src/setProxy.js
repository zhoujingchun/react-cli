const proxySettings = {
    // 接口代理1
    '/api': {
        target: 'http://0.0.0.0:3003',
        changeOrigin: true,
    },
}

module.exports = proxySettings
