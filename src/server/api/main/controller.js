
const Question = require('./model');

exports.read = async () => {
    return Question.find({status: "open"});
};

exports.add = async ({ data = {} } = {}) => {
    return Question.create(data);
};

exports.findById = async (data = {}) => {
    return Question.find(data.id);
};

exports.remove = async (data = {}) => {
    return Question.remove()
};

exports.findbyIdAndRemove = async (id) => {
    return Question.findByIdAndRemove({_id:id}, function (err) {
        if(err){
            return console.log(err);
        }
    });
};


exports.updateRateById = async (id, rate) => {
    return Question.update(
        { _id: id },
        { $set: { "priority": rate }});
};


exports.updateStatusById = async (id, status) => {
    return Question.update(
        { _id: id },
        { $set: { "status": status }});
};



