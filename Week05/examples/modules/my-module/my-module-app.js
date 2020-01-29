// Include our custom module
const mymodule = require('./my-module')

// Call an exported function from my custom module
console.log( mymodule.getWelcomeMessage('Albert') )
console.log( mymodule.getWelcomeMessage() )