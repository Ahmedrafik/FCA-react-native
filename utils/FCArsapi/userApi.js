import Constant from '../../components/common/Constants'

export function getUserByLogin (login, password) {
    const url = Constant.URL_API + 'user/verifyAccess'
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: login,
            pass: password
        })
    })
}

export function saveUser (userFca) {
    const url = Constant.URL_API + 'user/'
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userFca)
    })
}
