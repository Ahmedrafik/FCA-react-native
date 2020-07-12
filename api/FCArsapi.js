const URL_API = "http://192.168.0.29:8080/api/";

export function getUserByLogin (login, password) {
    const url = URL_API + 'user/verifyAccess'
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
    const url = URL_API + 'user/'
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userFca)
    })
}
