const router = require('koa-router')();
const controller = require('./controller');
const marko = require('marko');

router.get('/', async ctx => {

});

router.post('/', async ctx => {
    const data = ctx.request.body;
    const question = await controller.add({ data });

    ctx.body = question;
});

module.exports = router.routes();