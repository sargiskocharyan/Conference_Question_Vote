const router = require('koa-router')();
const controller = require('./controller');
const marko = require('marko');



router.get('/', async ctx => {

    let data = {

    };
    ctx.body = marko.load('./public/views/login.marko').stream(data);
    ctx.type = 'text/html';

});

router.post('/', async ctx => {

    if (ctx.request.body.username ) {
        var username = ctx.request.body.username;
        var user = await controller.loginUser(username);
        ctx.body = "The user is logged in";
        //redirect
        ctx.redirect('/');
    }
});

module.exports = router.routes();
