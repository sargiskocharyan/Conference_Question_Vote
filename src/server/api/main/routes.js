const router = require('koa-router')();
const controller = require('./controller');
const userController = require('./../login/controller');
const marko = require('marko');

function sortByPriority(questions) {
    var sorted = questions.sort(function(a,b) {
        return (b.priority > a.priority) ? 1 : ((a.priority < b.priority) ? -1 : 0);
    });
    return sorted;
}

router.get('/', async ctx => {
    let questions = await controller.read();
    let sortedQuestions = sortByPriority(questions);

    let user = await userController.getLoggedInUser();
    console.log("dm in main route==== ", user);
    let data = {};
    if (user[0])
    {
        data = {
            isUserAdmin: user[0].isUserAdmin ,
            isUserLecturer: user[0].isUserLecturer,
            isUserAttendee: user[0].isUserAttendee ,
            username:user[0].username.toString() ,
            questions:sortedQuestions
        };
    }
    else {
        data = {
            isUserAdmin: false ,
            isUserLecturer: false,
            isUserAttendee: false,
            username:"",
            questions:sortedQuestions
        };
    }

    ctx.body = marko.load(' ./../public/views/index.marko').stream(data);
    ctx.type = 'text/html';

});


router.post('/', async ctx => {

});

module.exports = router.routes();

