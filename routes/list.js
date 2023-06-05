var express = require('express');
const { getList } = require('../controller/getList');
var router = express.Router();

/* GET students. */
router.get('/list', getList);

module.exports = router;
