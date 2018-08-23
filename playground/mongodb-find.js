// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb'); //this is  es6 destructuring, same as above


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to the database server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').find({_id:new ObjectId("5b7f05606bf390a7b3012c99")}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //     console.log('Unable to fetch todos', err);
    // } );
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log('Todos count ' + count);
    //     console.log(JSON.stringify(count, undefined, 2));
    // },(err)=>{
    //     console.log('Unable to fetch todos', err);
    // } );
    db.collection('Users').find({name:'Prashant'}).count().then((count)=>{
        console.log('Users count ' + count);
        console.log(JSON.stringify(count, undefined, 2));
    },(err)=>{
        console.log('Unable to fetch users', err);
    });
    db.close();
});