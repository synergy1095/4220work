const
    // For cryptographic functions (https://nodejs.org/api/crypto.html)
    crypto = require('crypto')
    
    // For reading keys and writing files
    fs = require('fs'),    
    path = require('path'),

    // The message we will sign
    message = 'Hello, World!'
    
/*********************************
    Generate a signature
*********************************/
const
    // Read the private key
    fullPrivateKeyPath = path.resolve('keys', 'private_key.pem'),
    privateKey = fs.readFileSync(fullPrivateKeyPath, 'utf8'),

    // Get a new signer object (Note: we don't use 'new')
    sign = crypto.createSign('SHA256')

    // Update the signer object with the message we want to sign
    sign.update( message )

    // Generate the signature
    const signature = sign.sign(privateKey, 'hex')

// Prints: the calculated signature
console.log(`
Message: 
    ${message}
Signature ('hex'): 
    ${signature}
`)

/*********************************
    Verify the message
*********************************/
const
    // Load the public key
    fullPublicKeyPath = path.resolve('keys', 'public_key.pem'),
    publicKey = fs.readFileSync(fullPublicKeyPath, 'utf8'),

    // Get a new Verify object (Note: we don't use 'new')
    verify = crypto.createVerify('SHA256')

    // Update the verify object with the message we want to verify
    verify.update( message )

    // Determine the validity of the signature for the data and public key.
    const isValidSignature = verify.verify(publicKey, signature, 'hex')

// Print the results
console.log( `
Message:
    ${message}
Signature ('hex'):
    ${signature}
Valid: ${isValidSignature}
`)
