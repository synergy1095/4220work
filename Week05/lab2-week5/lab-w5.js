
function helloWorldCoins(){
    const crypto = require('crypto')

    let hashMessage = ''
    let hashString = ''
    for(let i = 1; !hashString.startsWith('000'); i++){
        const hash = crypto.createHash('sha256')
        hashMessage = 'Hellow, World!' + i
        hash.update(hashMessage)
        hashString = hash.digest('hex')
    }

    //The 'SHA-256' digest of 'Hello, World!???' is: 000....
    console.log(`The 'SHA-256' digest of '${hashMessage}' is: ${hashString}`)
}

helloWorldCoins()

function messageValidator() {
    const request = require('request'),
        crypto = require('crypto'),
        fs = require('fs'),
        path = require('path')
    
    request('http://albertcervantes.com/cs4220/messages.json', (error, response, body) => {
        let jsonArr = JSON.parse(body)

        const fullPublicKeyPath = path.resolve('keys', 'public_key.pem'),
            publicKey = fs.readFileSync(fullPublicKeyPath, 'utf8')

        for(let i = 0; i < jsonArr.length; i++){
            const verify = crypto.createVerify('SHA256')
            verify.update(jsonArr[i]['message'])
            const isValidSignature = verify.verify(publicKey, jsonArr[i]['signature'], 'hex')

            console.log(`${isValidSignature} - ${jsonArr[i]['message']}`)
        }
    })
}

console.log('_____________________________\n')
messageValidator()

