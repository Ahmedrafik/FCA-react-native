export let required = (text) => {
    return typeof text !== 'undefined' && text.trim() !== ''
}

export let validateEmail = (email) => {
    const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g

    return expression.test(String(email).toLowerCase())
}


