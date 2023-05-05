const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const mongoose = require('mongoose')

const QuizModel = require('./Models/quiz')

mongoose.connect('mongodb+srv://jalinevans:TofuGremlin3*@webdevfinalproject.1jyrndh.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('Connected to database')
})
.catch(()=>{
    console.log('Connection error')
})

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    console.log("Middleware");
    next();
});

app.get('/api/quiz', (req, res, next) => {
    QuizModel.find().then(data => {
        res.status(200).json(data);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve quiz questions.' });
      });
});

module.exports = app;