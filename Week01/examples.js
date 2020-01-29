// console.log and Comments

console.log('hello')            // hello
console.log('hello' + ' world')  // hello world
console.log(1)                  // 1
console.log(1 + 1)              // 2
console.log(false)              // false
console.log(null)               // null
console.log(undefined)          // undefined


// // Comparison Operators
console.log('2' == 2)
console.log(false == 0)

console.log('2' !== 2)
console.log(false !== 0)

console.log(2 > 1)
console.log(2 >= 2)
console.log(1 < 2)

// // Exceptions
console.log(undefined == false)
console.log(null == false)


// // Declaration
const hello = 'hello'
// hello = 'hey' // <-- this will display an error when executed
console.log(hello)

let count = 1
count++
console.log(count)

let hey = 'hey'
hey = 'hello'
console.log(hey)


// // Functions
function addTwo(n) {
    return n + 2
}
console.log(addTwo(2))

// // Assigned as a variable
const say = console.log
say('Anything I want.')

const addNumbers = function(n, m) {
    return n + m
}
console.log(addNumbers(2, 3))

// // Passed as arguments to another function
function addFunction(fn) {
    return fn(1, 3)
}
console.log(addFunction(addNumbers))


// // Passed as arguments to another function
const add = (n, m, callback) => {
    const total = n + m
    // by executing the callback function here it will
    // "call back" to the log function with the result
    callback(total)
}

const print = (n, m) => {
    add(n, m, function(result) {
        console.log(result)
    })
}
print(2, 5)


// // Returned as value from a function
function getFunction(n) {
    if (n % 2 === 0)
        return function add() {
            return n + 2
        }
    else
        return function subtract() {
            return n - 2
        }
}

const fn = getFunction(9)
console.log(fn())