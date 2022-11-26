const db = require('../db-con');

const UserSchema = db.Schema({
    name: String,
    age: Number,
})

module.exports = db.model('User', UserSchema) 