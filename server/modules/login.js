module.exports = {
    user: {
        statusCode: 200,
        message: '登录成功!',
    },
    logout: {
        statusCode: 200,
        message: '注销成功!',
    },

    getUserInfo: {
        statusCode: 200,
        message: '获得用户信息成功!',
        data: {
            username: 222,
            userType: '0',
        },
    },
}
