
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:String,age: String
})
const MyModel = mongoose.model('users', userSchema);
module.exports=MyModel;