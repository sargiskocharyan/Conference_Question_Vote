const User = require('./model');

exports.loginUser = async (username) => {
    return User.update(
        {"username": username},
        { $set: {"isLoggedIn":true}});
};

exports.loginOutUser = async (username) => {
    return User.update(
        {"username": username},
        { $set: {"isLoggedIn":false}});
};

exports.getLoggedInUser = async () => {
    return User.find({
        "isLoggedIn":true
    });
};

