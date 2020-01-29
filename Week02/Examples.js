// ---- Arrays
// let listOfNumbers = [2, 3, 5, 7, 11];
// console.log(listOfNumbers.join(''))
// console.log(listOfNumbers[2]);
// // → 5
// console.log(listOfNumbers[2 - 1]);
// // → 3

// ---- Properties
// null.length;
// // → TypeError: Cannot read property 'length' of null

// ---- Strings - Concatenation
// console.log("con" + "cat" + "e" + "nate")
// let hi = ["Hello", "World!"]
// // console.log(hi[0]+ ", " + hi[1]);
// console.log( hi.join('') )

// ---- Arrays - Push/Pop
// const mack = [];
// mack.push("Jan");
// mack.push("Feb", "Mar", "Apr", 'May', 'June');
// console.log(mack);
// // → ["Mack", "the", "Knife"]
// console.log(mack.join("-"));
// // → Mack the Knife
// console.log(mack.pop());
// // → Knife
// console.log(mack);
// // → ["Mack", "the"]

// let arr = [1,2,3]
// console.log(arr, 'Lenght: ' + arr.length)
// console.log(arr[2])
// arr[9] = 'Hello'
// console.log(arr, 'Lenght: ' + arr.length)

// let arr2 = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr2, 'Lenght: ' + arr2.length)
// arr2.length = 5
// console.log(arr2, 'Lenght: ' + arr2.length)

// ---- Arrays - Splice
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at 1st index position
// console.log(months);
// // expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

// months.splice(4, 1, 'May', 'June', 'July');
// // replaces 1 element at 4th index
// console.log(months);
// // expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']



// const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
// console.log(myFish);
// let removed = myFish.splice(3, 1);
// console.log(myFish);
// console.log(removed)
// // removed is ["mandarin"]
// // myFish is ["angel", "clown", "drum", "sturgeon"]

// ---- CONST and LET
// let x = 5
// x = 5 + 10

// Character Access
// console.log( 'cat'.charAt(1) ); // returns "a"
// console.log('cat'[1]); // returns "a"

// String comparison
// console.log('a' < 'b')
// console.log('false' == 'false')

// Objects
// let descriptions = {
//     work: "Went to work",
//     "touched tree": "Touched a tree"
//   };
// console.log(descriptions)

let professor = {
    name: 'Albert',
    cin: '1234567890'
}
// console.log(professor)
// console.log(professor.classes)
//professor.classes = ['CS3220', 'CS4220']
//console.log(professor.classes)

// let cs4220 = {
//     name: 'CS4220',
//     days: ['Sunday']
// }
// let cs3220 = {
//     name: 'CS3220',
//     days: ['Tuesday', 'Thursday']
// }
// professor.classes.push(cs3220, cs4220)
professor.classes = [
    {
        name: 'CS4220',
        days: ['Sunday']
    },
    {
        name: 'CS3220',
        days: ['Tuesday', 'Thursday']
    }
]

//console.log(professor)

// CS4220 meets on Sunday
// CS3220 meets on Tuesday and Thursday

for (let i = 0; i < professor.classes.length; i++){
    let course = professor.classes[i]
    console.log(course.name + ' meets on ' + course.days.join(' and '))
}