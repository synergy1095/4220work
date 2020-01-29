// // TIMERS
// console.log('Before')
// setTimeout(() => {
//     console.log('inside the timeout')
// }, 10) // in ms
// // 1000 ms = 1 sec
// console.log('After')

// console.log('Before')
// let count = 0
// const id = setInterval(() => {
//     if (count === 5)
//         clearInterval(id)
//     else
//         console.log('repeat')

//     count++
// }, 10)
// console.log('After')


// // CALLBACKS
const foods = [
    { food: 'pizza', time: 3000 },
    { food: 'spaghetti', time: 2000 },
    { food: 'sandwich', time: 1000 },
    { food: 'ice cream', time: null }
]

// const cook = ({ food, time }, callback) => {
//     setTimeout(() => {
//         const error = !time ? `cannot cook ${food}` : null
//         callback(error, `${food} is ready`)
//     }, time || 0)
// }

// cook({ food: 'pizza', time: 3000 }, (err, result) => {
//     console.log(result)
// })
// cook({ food: 'sandwich', time: 1000 }, (err, result) => {
//     console.log(result)
// })

// const makeFood = (foods) => {
//     foods.forEach((food) => {
//         cook(food, (error, result) => {
//             if (error)
//                 console.log(error)
//             else
//                 console.log(result)
//         })
//     })
// }
// makeFood(foods)


// // // PROMISES
const cookAgain = ({ food, time }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = !time ? `cannot cook ${food}` : null
            if (error)
                reject(error)
            else
                resolve(`${food} is ready`)
        }, time)
    })
}
// cookAgain({ food: 'pizza', time: 3000 })
//     .then((result) => {
//         console.log(result)
//     })

// cookAgain({ food: 'sandwich', time: 1000 })
//     .then((result) => {
//         console.log(result)
//     })

// // // LOOP PROMISES
// const makeFoodAgain = (foods) => {
//     foods.forEach((food) => {
//         cookAgain(food)
//             .then((result) => {
//                 console.log(result)
//             })
//             .catch(error => {
//                 console.log('error', error)
//             })
//     })
// }
// makeFoodAgain(foods)

// // // PROMISE ALL
// const makeAllFoods = (foods) => {
//     const promises = foods.map((food) => {
//         return cookAgain(food)
//     })

//     Promise.all(promises)
//         .then((results) => {
//             console.log(results)
//         })
//         .catch(error => {
//             console.log('error', error)
//         })
// }
// makeAllFoods(foods)
