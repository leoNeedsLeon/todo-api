const {mogoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectId} = require('mongodb');

var id = ObjectId("52b83099a15211f2b0ca86337");

if(!ObjectId.isValid(id)){
    console.log('Is not valid');
}

// Todo.find({
//     _id:id
// }).then((todos)=>{
//     if(!todos)
//         return console.log('Id not found');
//     console.log(todos);
// }).catch((err)=>console.log('Something happened'));

// Todo.findOne({
//     _id:id
// }).then((todos)=>{
//     console.log(todos);
// }).catch((err)=>console.log('Hey what happened'));

Todo.findById({
    _id:id
}).then((todos)=>{
    // if(!todos)
    //     return console.log('Id not found');
    console.log(todos);
}).catch((err)=>console.log('Something happened'));