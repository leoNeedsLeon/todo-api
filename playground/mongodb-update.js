// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb'); //this is  es6 destructuring, same as above


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to the database server');
    }
    console.log('Connected to MongoDB server'); 
    
    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({//takes 3 arguments the first one to find, second one to set new values using operator and third one is options objects
        _id: ObjectId("5b7f32140a71f10d34d7a7a4")
    },{
        $set:{
            completed: false,
            name: 'Prashant'
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    //db.close();
}); 