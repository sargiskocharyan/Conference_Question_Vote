const mongoose = require('mongoose');

const { Schema } = require('mongoose');

const QuestionSchema = new Schema({
    content: {
        type : String,
        required: false
    },
    created_on: {
        type: Date,
        default: Date.now
    },
    priority: {
        type: Number,
        default: 0
    },
    author: {
        type : String,
        required: false
    },
    status : {
        type: String,
        required: false
    }
});
const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;

