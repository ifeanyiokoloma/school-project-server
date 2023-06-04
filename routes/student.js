var express = require("express");
var router = express.Router();

/* GET student */
router.get("/:regno", function (req, res, next) {
    const { regnum } = req.params;
    console.log(regnum, req.params);


  res.send("student list");
});

module.exports = router;
