const router = require('koa-router')();
const controller = require('./controller');
const marko = require('marko');


router.post('/', async ctx => {
    if (ctx.request.body.username) {
        var username = ctx.request.body.username;
        var user = await controller.loginOutUser(username);
        ctx.body = "The user is logged out";
        //redirect
        ctx.redirect('/');
    }
});

module.exports = router.routes();