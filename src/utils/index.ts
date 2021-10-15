import CryptoJS from 'crypto-js'

const SECRETKEY = 'front_666666'

const add = (a: number, b: number) => {
    return a + b
}

/**
 * 加密函数，加密同一个字符串生成的都不相同
 * @param {*} str
 */
export function encrypt(str: string) {
    return CryptoJS.AES.encrypt(JSON.stringify(str), SECRETKEY).toString()
}

/**
 * 解密函数
 * @param {*} str
 */
export function decrypt(str: string) {
    const bytes = CryptoJS.AES.decrypt(str, SECRETKEY)
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
}
export default add
