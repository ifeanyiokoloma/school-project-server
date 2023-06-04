var express = require("express");
var router = express.Router();

/* GET student */
router.get("/", function (req, res, next) {
  console.log(req.query);

  res.send("Search");
});

module.exports = router;
