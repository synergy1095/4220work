const
    config = require('./config.json'),
    Mongoose = require('mongoose'),
    { generateHash, validatePassword } = require('./validate')

Mongoose.connect(config.uri)
Mongoose.connection.on('error', err => {
    console.log('MongoDB Connection Error:' + err)
})

const UserSchema = new Mongoose.Schema({
    name: String,
    avatar: String,
    socketId: String,
    password: String
}, { strict: false })

const MessageSchema = new Mongoose.Schema({
    message: String,
    user: UserSchema
}, { strict: false })

const
    User = Mongoose.model('users', UserSchema),
    Message = Mongoose.model('messages', MessageSchema)


const activeUsers = () => User.find({ socketId: { $ne: null } }, { password: 0 })

const allMessages = () => Message.find()

const findUserByName = userName => User.findOne({ name: { $regex: `^${userName}$`, $options: 'i' } })

const loginUser = (userName, password, socketId) => {
    // find if the username is in the db
    return findUserByName(userName)
        .then(found => {
            if (!found)
                throw new Error('User does not exists')

            // validate the password
            const valid = validatePassword(password, found.password)
            if (!valid)
                throw new Error('Invalid Password')

            return found
        })
        // active == have socketId
        .then(({ _id }) => User.findOneAndUpdate({ _id }, { $set: { socketId } }))
        // return name and avatar
        .then(({ name, avatar }) => {
            return { name, avatar }
        })
}

const createUser = (userName, password, socketId) => {
    // find if username is in db
    return findUserByName(userName)
        .then(found => {
            if (found)
                throw new Error('User already exists')

            return {
                socketId,
                name: userName,
                password: generateHash(password),
                avatar: `https://robohash.org/${userName}?set=set3`
            }
        })
        // create user
        .then(user => User.create(user))
        // return avatar and name
        .then(({ name, avatar }) => {
            return { name, avatar }
        })
}

const createMessage = data => {
    const content = {
        user: data.user,
        message: data.message,
        date: new Date().getTime()
    }
    return Message.create(content)
}

const logoutUser = socketId => {
    return User.findOneAndUpdate({ socketId }, { $set: { socketId: null } })
}

module.exports = {
    activeUsers,
    allMessages,
    createUser,
    createMessage,
    loginUser,
    logoutUser
}