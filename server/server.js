var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/users');
var {ObjectId} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos',(req, res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    })
    .catch((e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id',(req, res)=>{
    var id = req.params.id;
    if(!ObjectId.isValid(id))
        return res.status(404).send('Watch what ya typing man!!!');
    Todo.findById({_id:id}).then((docs)=>{
        if(docs)
        return res.send({docs});
        return res.status(404).send('Id not found');
    }).catch((err)=>{
        console.log(err);
        res.status(400).send();
    });
});

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});

module.exports = {app};