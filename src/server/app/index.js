
const serve = require('koa-static');
const Koa = require('koa');
const database = require('./../database');
const router = require('./../routing');
const bodyparser = require('koa-bodyparser');
const responsetime = require('koa-response-time');
const config = require('./../configuration');
const marko = require('marko');
const cors = require('koa-cors');



const app = new Koa();
app.use(cors());
app.use(serve('./public'));
app.use(responsetime());
app.use(bodyparser());
app.use(router.routes());
app.use(ctx => { ctx.type = 'json'});


exports.start = async () => {
  try {
    await database.connect();
    const port = config.get("PORT");
    await app.listen(port);
    console.log('Connected on port: ' + port);
  }
  catch(error) {
    console.log(error);
  }

};
