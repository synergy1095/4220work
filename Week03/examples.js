// // DESTRUCTURING OBJECTS
const dog = {

    breed: 'border collie',
    colors: ['black', 'white']
}

// // SETTING DEFAULTS
const { name = 'fido', breed, colors } = dog
console.log(name)
console.log(breed)
console.log(colors)

const fetch = ({ name = 'fido', breed, colors }) => {
    console.log(name, breed, colors)
}
fetch(dog)


// TEMPLATE LITERALS
const food = ['pizza', 'pasta', 'cake']
const foodLoop = arr => {
    arr.forEach(item => {
        console.log(`i ${item === 'cake' ? 'do not like' : 'like'} ${item}`)
    })
}
foodLoop(food)


// // CLASSES
class Polygon {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    get area() {
        return this.height * this.width
    }

    getArea() {
        return this.height * this.width
    }
}
const rectangle = new Polygon(10, 15)
console.log(rectangle.area)
console.log(rectangle.getArea())

// // CLASSES WITH INHERITANCE
class Square extends Polygon {
    constructor(height, width) {
        super(height, width)
    }

    getHeightWidth() {
        return `${this.height} ${this.width}`
    }
    getArea() {
        return 'This is a square ' + super.getArea()
    }

    static create(height, width) {
        return new Square(height, width)
    }

}
const square = Square.create(10, 10)
console.log(square.area)
console.log(square.getArea())


// // CLASSES WITH CHAINING
class Todos {
    constructor(list = []) {
        this.list = list
    }

    add({ name, completed = false }) {
        this.list.push({ name, completed })
        return this
    }

    check(task) {
        const found = this.list.find(item => {
            return item.name.toLowerCase() === task.toLowerCase()
        })

        if (found)
            found.completed = !found.completed

        return this
    }

    get show() {
        this.list.forEach(item => {
            console.log(`| TASK ${item.name} \n -- COMPLETED: ${item.completed ? 'yes' : 'no'}`)
        })

        return this
    }
}

const todo = new Todos()
todo
    .add({ name: 'do homework' })
    .add({ name: 'walk fido' })
    .check('Do Homework')
    .show
