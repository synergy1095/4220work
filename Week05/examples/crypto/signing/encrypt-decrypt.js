const
    // For cryptographic functions (https://nodejs.org/api/crypto.html)
    crypto = require('crypto')
    
    // For reading keys and writing files
    fs = require('fs'),    
    path = require('path'),

    // The message we will sign
    message = 'Hello, World!'
    
/*********************************
    Encrypt the message using the PUBLIC key
*********************************/
const
    // Load the public key
    fullPublicKeyPath = path.resolve('keys', 'public_key.pem'),
    publicKey = fs.readFileSync(fullPublicKeyPath, 'utf8'),
    
    // Perform encryption
    encryptedBuffer = crypto.publicEncrypt(publicKey, Buffer.from(message)),

    // Convert buffer to HEX string
    encryptedHexString = encryptedBuffer.toString('hex')

// Prints: the calculated signature
console.log(`
Message: 
    ${message}
    
Encrypted with Public Key ('hex'): 
    ${encryptedHexString}
`)

/*********************************
    Decrypt the message using the PRIVATE key
*********************************/
const
    
    // Read the private key
    fullPrivateKeyPath = path.resolve('keys', 'private_key.pem'),
    privateKey = fs.readFileSync(fullPrivateKeyPath, 'utf8'),

    // Perform decryption
    decryptedBuffer = crypto.privateDecrypt(privateKey, Buffer.from(encryptedHexString, 'hex')),

    // Convert buffer to string
    decryptedMessage = decryptedBuffer.toString()

// Print the results
console.log( `
Encrypted Message ('hex'):
    ${encryptedHexString}

Decrypted Message:
    ${decryptedMessage}
`)
