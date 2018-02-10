const router = require('koa-router')();
const controller = require('./controller');
const marko = require('marko');

router.post('/', async ctx => {
    if (ctx.request.body.question_id) {
        var id = ctx.request.body.question_id;
        await controller.findbyIdAndRemove(id);
        ctx.body = "The question is deleted";
    }
});


module.exports = router.routes();