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

export function saveBottle (bottle) {
    const url = Constant.URL_API + 'bottlebill/'
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bottle)
    })
}

export function saveBill (bill) {
    const url = Constant.URL_API + 'bill/'
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bill)
    })
}

