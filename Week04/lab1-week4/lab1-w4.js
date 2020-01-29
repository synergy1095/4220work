

function httpPromise(code, count){
    return new Promise((resolve, reject) => {
        if (code >= 200 && code < 400) {
            resolve(count)
        }
        else if (code >= 400 && code < 600) {
            reject(count)
        }
    
    })
}

function getTimes(links, callback){
    let times = {}
    let count = 0
    const http = require('http')
    links2 = links.slice(0)

    let successFail = { 'success': [], 'error': [] }

    for(let i = 0; i < links.length; i++){
        times[links[i]] = + new Date()
        http.get(links[i], (res) => {
            count++
            times[links[i]] = new Date() - times[links[i]]
            httpPromise(res.statusCode, count)
                .then((count2) => {
                    successFail['success'].push(links2[i])
                    if (count2 >= links2.length)
                        console.log(successFail)
                })
                .catch((count2) => {
                    successFail['error'].push(links2[i])
                    if (count2 >= links2.length)
                        console.log(successFail)
                })
            links[i] = {'url':links[i], 'time':times[links[i]]}
            if (count >= links.length) {
                // callback to calling function with ready list
                callback(links)
            }
        })
    }
}

function orderTimes(arr = []){
    if(arr.length <= 0)
        return []

    if(typeof arr[0] == 'string')
        getTimes(arr, orderTimes)
    else if(typeof arr[0] == 'object'){
        for(let i = 1; i < arr.length; i++){
            for(let j = 0; j < i; j++){
                if(arr[j]['time'] > arr[i]['time']){
                    let temp = arr[j]
                    arr[j] = arr[i]
                    arr[i] = temp
                }
            }
        }
        console.log(arr)
    }
}

const sample = [
    'http://www.google.com/',
    'http://www.spotify.com/us/',
    'http://twitter.com/',
    'http://google.com/nothing'
]

orderTimes(sample)
