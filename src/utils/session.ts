/**
 * 功能：
 * 作者：zhoujingchun
 * 日期：2021-09-07 17:12
 */
import Cookies from 'js-cookie'

const LOGIN_COOKIE_NAME = 'sessionId'

export function authenticateSuccess(token: string) {
    Cookies.set(LOGIN_COOKIE_NAME, token)
}

export function logout() {
    Cookies.remove(LOGIN_COOKIE_NAME)
}

export function isAuthenticated() {
    return Cookies.get(LOGIN_COOKIE_NAME)
}
