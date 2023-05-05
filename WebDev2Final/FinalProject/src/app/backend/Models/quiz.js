const mongoose = require('mongoose')

const quizSchema = mongoose.Schema({
    quiz_name: {type: String, required: true},
    questions:[
      {
        question: {type: String, required: true},
        options: [
          { id: {type: Number, required: true}, text: {type: String, required: true} }
        ],
        answer: {type: Number, required: true} 
      }
    ]
  });

// module.exports = mongoose.model('Quiz', quizSchema)

module.exports =  mongoose.model('Quiz', quizSchema, 'Quizzes');
  