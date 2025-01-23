var express = require("express");
var router = express.Router();

const fetch = require("node-fetch");
const User = require("../models/users");

/* GET users listing. */
router.get("/", function (req, res, next) {
  //res.send("respond with a resource");
  console.log("Hello user.js > /");

  const newUser = new db({
    firstName: "Jane",
    lastName: "Doe",
  });

  newUser.save().then(() => {
    db.find()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("Hello user.js > err = ", err);
      });
  });

  res.json({ data: "User ok" });
});

module.exports = router;
