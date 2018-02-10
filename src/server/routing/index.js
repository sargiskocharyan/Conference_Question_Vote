const router = require('koa-router')();

const main = require('./../api/main/routes');
const mainData = require('./../api/main/route_main_data');
const addQuestion = require('./../api/main/route_add_question');
const updateQuestion = require('./../api/main/route_update_question');
const deleteQuestion = require('./../api/main/route_delete_question');
const login = require('./../api/login/route_login');
const logout = require('./../api/login/route_logout');

router.use('/', main);
router.use('/api/main_data', mainData);
router.use('/api/add_questions', addQuestion);
router.use('/api/update_question', updateQuestion);
router.use('/api/delete_question', deleteQuestion);
router.use('/api/login', login);
router.use('/api/logout', logout);



module.exports = router
