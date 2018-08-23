// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //this is  es6 destructuring, same as above


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to the database server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do', 
    //     completed: false
    // },(err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection('Users').insertOne({
    //     name: 'Prashant',
    //     age: 21,
    //     location: 'Pune'
    // },(err, result)=>{
    //     if(err){
    //         return console.log('Failed to insert document');
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());//toget the time stamp from the id
    // });
    db.close();
});