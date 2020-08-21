import Constant from '../../components/common/Constants'

export function getBottleBills () {
    const url = Constant.URL_API + 'bottlebill/'
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

export function getPromBills () {
    const url = Constant.URL_API + 'bill/billsFormated'
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
