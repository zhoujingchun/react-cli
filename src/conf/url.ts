const url = {
    root: '/',
    login: {
        path: '/login',
        title: '登录页',
    },
    permission: {
        path: '/permission-denied',
        title: '无权访问',
    },
    serverError: {
        path: '/server-error',
        title: '服务器错误',
    },
    app: {
        root: {
            path: '/app',
            title: '权限页',
        },
        dash: {
            path: '/app/dash',
            title: '首页',
        },

        chatRoom: {
            path: '/app/chat-room',
            title: '聊天室',
        },
        frontScenario: {
            path: '/app/front-scenario',
            title: '前端场景',
        },

        file: {
            path: '/app/front-scenario/file',
            title: '文件断点续传',
        },

        virtualScroll: {
            path: '/app/front-scenario/virtual-scroll',
            title: '虚拟滚动列表',
        },
        study: {
            path: '/app/study',
            title: '学习',
        },

        ts: {
            path: '/app/study/ts-study',
            title: 'Ts学习',
        },
        hooks: {
            path: '/app/study/hooks',
            title: '自定义hooks',
        },
    },
}

export default url
