const router = require('koa-router')();
const controller = require('./controller');
const marko = require('marko');

router.get('/', async ctx => {

});

router.post('/', async ctx => {

    if (ctx.request.body.question_id) {
        var id = ctx.request.body.question_id;
        var priority = ctx.request.body.priority;
        var status = ctx.request.body.status;

        if (priority) {
            await controller.updateRateById(id, priority);
        }
        if (status) {
            await controller.updateStatusById(id, status);
        }
        ctx.body = "The question is updated";
    }
});

module.exports = router.routes();