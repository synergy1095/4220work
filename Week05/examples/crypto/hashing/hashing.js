const
    // For cryptographic functions (https://nodejs.org/api/crypto.html)
    crypto = require('crypto')

// Get a list of all supported hashing algorithms
const hashes = crypto.getHashes()

// Print the list to the console
//console.log(hashes)

const 
    // The hashing algorithm we will use
    hashingAlgorithm = 'sha256',

    // Create a new Hash object (Note: we do not use 'new')
    hash = crypto.createHash(hashingAlgorithm),

    // The message to be hashed
    message = 'Hello, World!'

// Update the data to be hashed
hash.update('some data to hash');

// Perform the hash
const digest = hash.digest('hex')

// Print the results
console.log(`The '${hashingAlgorithm}' digest of '${message}' is: ${digest}`);