// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb'); //this is  es6 destructuring, same as above


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to the database server');
    }
    console.log('Connected to MongoDB server'); 
    //deleteMany
    // db.collection('Todos').deleteMany({text:'Walk the dog'}).then((result)=>{
    //     console.log(result);
    // });

    //deleteOne - only deletes the first one  
    // db.collection('Todos').deleteOne({text:'Eat something'}).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        console.log(result);
    });
    //db.close();
});