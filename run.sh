#!/bin/bash

mongo ./src/server/database/initialSetup.js

cd public

bower install bootstrap

cd ../

npm install --save  koa koa-bodyparser koa-cors koa-response-time koa-router koa-static marko mongoose nodemon

npm start

