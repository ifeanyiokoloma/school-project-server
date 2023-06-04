var express = require('express');
const { getStudentsList } = require('../controller/getStudentList');
var router = express.Router();

/* GET students. */
router.get('/list', getStudentsList);

module.exports = router;
