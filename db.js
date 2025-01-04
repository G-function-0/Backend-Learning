const mongoose = require("mongoose");
const ObjectId = mongoose.ObjectId;
const Schema = mongoose.Schema;

const User = new Schema({
    email:{type:String, unique: true},
    username:String,
    password:String
}); 

const Todo = new Schema({
    userId:ObjectId,
    title:String,
    done:Boolean
});

// creat models
 const UserModel = mongoose.model('user',User);
 const TodoModel = mongoose.model('todos',Todo);
 
 
//make modues expportable
module.exports = {
    UserModel,
    TodoModel
}
