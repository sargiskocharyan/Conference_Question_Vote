
var db = connect('127.0.0.1:27017/cqv_questions');

db.users.insert({username:"moderator", isUserAdmin: true, isUserLecturer:false, isUserAttendee:false, isLoggedIn:false})
db.users.insert({username:"attendee", isUserAdmin: false, isUserLecturer:false, isUserAttendee:true, isLoggedIn:false})
db.users.insert({username:"lecturer", isUserAdmin: false, isUserLecturer:true, isUserAttendee:false, isLoggedIn:false})