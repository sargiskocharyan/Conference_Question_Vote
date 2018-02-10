const router = require('koa-router')();
const controller = require('./controller');
const userController = require('./../login/controller');
const marko = require('marko');



router.get('/', async ctx => {
    let questions = await controller.read();
    let user = await userController.getLoggedInUser();
    let data = {
        isUserAdmin: user.isUserAdmin ? user.isUserAdmin: false,
        isUserLecturer: user.isUserLecturer ? user.isUserLecturer: false,
        isUserAttendee: user.isUserAttendee ? user.isUserAttendee : false,
        username:user.username ? user.username: "",
        questions:questions
    };

    ctx.response.body = data;
});

module.exports = router.routes();