
const bcrypt = require('bcrypt')

exports.generateHash = password => {
    const
        saltRounds = 2,
        salt = bcrypt.genSaltSync(saltRounds)
    return bcrypt.hashSync(password, salt)
}

exports.validatePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}