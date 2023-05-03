const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

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

// app.post("/api/quiz",(req,res,next)=>{
//     const quiz = req.body
//     console.log(quiz)
//     res.status(201).json({
//         message: "Quiz added successfully"
//     })
// });

app.get('/api/quiz',(req,res,next)=>{
    const questions = [
    {
        id: 1,
        text: 'Answer is number 1',
        options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' }
        ],
        answer: 1
    },
    {
        id: 2,
        text: 'Answer is number 2',
        options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' }
        ],
        answer: 2
    },
    {
        id: 3,
        text: 'Answer is number 3',
        options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' }
        ],
        answer: 3
    }
    ];
    res.json(questions);
});


module.exports = app;