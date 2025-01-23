var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("Hy LOG");
  //res.render("index", { title: "Express" });

  res.json({ result: true, data: "Hello there" });
});

module.exports = router;
