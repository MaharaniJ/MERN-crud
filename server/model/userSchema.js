const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:'String',
    email:'String',
    age:'Number'

})
const userModel= mongoose.model('users', userSchema)
//user is collection name
module.exports = userModel