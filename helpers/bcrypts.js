const bcrypt = require('bcryptjs');

function passHash(password) {
    return bcrypt.hashSync(password, 10)
}

function comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = {
    passHash,
    comparePassword
}