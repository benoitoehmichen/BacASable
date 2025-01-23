var express = require("express");
var router = express.Router();

const fetch = require("node-fetch");
const User = require("../models/users");

/* GET users listing. */
router.get("/", function (req, res, next) {
  //res.send("respond with a resource");
  console.log("Hello user.js > /");

  const newUser = new User({
    name: "Michen",
    email: "Michenoehmichen@yahoo.fr",
    password: "123444",
  });

  newUser.save().then(() => {
    User.find()
      .then((data) => {
        console.log(".THEN > data = ", data);
      })
      .catch((err) => {
        console.log("Hello user.js > err = ", err);
      });
  });

  res.json({ data: "User ok" });
});

router.get("/allUsers", function (req, res) {
  console.log("Hello user.js > /allUsers");

  const result = User.find().then((data) => {
    console.log("data = ", data);
  });

  res.json({ data: "User OKOK" });
});

router.get("/oneUser", function (req, res) {
  console.log("Hello user.js > /oneUser");

  User.find({ name: "Benoit" }).then((data) => {
    console.log("data = ", data);
  });

  res.json({ data: "User OKOKOKOK" });
});

router.get("/oneUser2", function (req, res) {
  console.log("Hello user.js > /oneUser2");

  User.findOne({ name: "Benoit" }).then((data) => {
    console.log("data = ", data);
  });

  res.json({ data: "User KKKK" });
});

router.get("/oneUser3", function (req, res) {
  console.log("Hello user.js > /oneUser3");

  User.findOne({ name: "Benoit", password: "1234" }).then((data) => {
    console.log("data = ", data);
  });

  res.json({ data: "User find multiple criteria" });
});

router.get("/oneUser4", function (req, res) {
  console.log("Hello user.js > /oneUser4");

  User.find({ name: "Benoit", password: "1234" }).then((data) => {
    console.log("data = ", data);
  });

  res.json({ data: "User find multiple criteria, array" });
});

router.get("/oneUserById", function (req, res) {
  console.log("Hello user.js > /oneUserById");

  User.findById("679242c741e2206ec3ca2504").then((data) => {
    console.log("data = ", data);
  });

  res.json({ data: "User find ID" });
});

router.put("/updateUser", function (req, res) {
  console.log("Hello updateUser");

  User.updateOne({ name: "Benoit" }, { password: "passwordDDXX" }).then(() => {
    User.find().then((data) => console.log("After update, data = ", data));
  });

  res.json({ data: "Hy" });
});

//ne fonctionne pas
router.put("/addType", function (req, res) {
  console.log("Hello addType");

  User.updateOne(
    { name: "Michen" },
    {
      $push: {
        types: {
          name: "Couvert",
          color: "rouge",
        },
      },
    }
  ).then(() => {
    User.find().then((data) => console.log("After ADDING, data = ", data));
  });

  res.json({ data: "Hy 2" });
});

router.put("/updateUsers", function (req, res) {
  console.log("Hello updateUsers");

  User.updateMany({ name: "Benoit" }, { name: "Marcel" }).then(() => {
    User.find().then((data) => console.log("After updateMANY, data = ", data));
  });

  res.json({ data: "Hy" });
});

router.delete("/deleteUser", function (req, res) {
  console.log("Hello deleteUser");

  User.deleteOne({ name: "Michen" }).then(() => {
    User.find().then((data) => console.log("After delete, data = ", data));
  });

  res.json({ data: "Hy" });
});

module.exports = router;
