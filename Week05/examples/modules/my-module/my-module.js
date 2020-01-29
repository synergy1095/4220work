exports.getWelcomeMessage = (name) => {
    name = name ? name : 'Stranger'
    return `Hello, ${name}!`
}

exports.getParameters = (url) => {
    const start = url.indexOf('?') + 1
    const queryString = url.substring(start)

    // Split all key-value pairs
    const pairs = queryString.split('&')

    // Construct parameter object
    const params = {}

    pairs.forEach(pair => {
        const [key, value] = pair.split('=')
        params[key] = value
    })

    return params
}