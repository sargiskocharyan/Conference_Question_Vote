const mongoose = require('mongoose');

const { Schema } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type : String,
        required: true
    },
    created_on: {
        type: Date,
        default: Date.now
    },
    isUserAdmin: {
        type: Boolean,
        default: false
    },
    isUserLecturer: {
        type : Boolean,
        required: false
    },
    isUserAttendee : {
        type: Boolean,
        required: false
    },
    isLoggedIn: {
        type: Boolean,
        required: true
    }
});
const User = mongoose.model('User', UserSchema);

module.exports = User;
