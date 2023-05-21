export function setCookie (key, value) {
    let expireTime = new Date()
    expireTime.setTime(expireTime.getTime() + 24 * 3600 * 1000 * 7)
    document.cookie = key + '=' + value + ';expires=' + expireTime
}

export function getCookie (key) {
    if (document.cookie.length > 0) {
        var sessionId = ''
        var str = document.cookie
        if (str.indexOf(key + '=') > -1) {
            // let reg = new RegExp(/(?:sessionId=).+(;*?)/)
            sessionId = str.split('=')[1]
        }
    }
    return sessionId
}

export function delCookie (key) {
    if (document.cookie.length > 0) {
        document.cookie = key + '=;expires=Thu, 01-Jan-70 00:00:01 GMT'
    }
}
