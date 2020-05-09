const express = require('express');
const app = express();
const Task = require('./server/mongo');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.post('/task', (req, res) => {
    let MyName = new Task({ name:req.body.task});
    MyName.save()
        .then(e=>{
            res.json({
                message: 'added'
            });
        }).catch(e=>{
            res.json({
                error : true,
                message: 'not added'
            }).status(500);
        });     
})

app.get('/task', (req, res)=>{
    Task.find({})
    .then(d=>{
        res.json({
            data : d
        })
    }).catch(()=>{
        console.error('error');
    })
})


app.listen(5000);