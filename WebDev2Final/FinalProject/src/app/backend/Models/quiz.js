const mongoose = require('mongoose')

quizSchema = mongoose.Schema({
  quiz_name: {type: String, required: true},
  questions:[
    {
      question: {type: String, required: true},
      options: [{type: String, required: true}, {type: String, required: true}, {type: String, required: true}, {type: String, required: true}],
      answer: {type: String, required: true} 
    }
  ]
})

module.exports = mongoose.model('Quiz', quizSchema)