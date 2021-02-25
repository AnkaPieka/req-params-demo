const express = require("express");
const router = express.Router();

const ShoeModel = require("../models/Shoe");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("this is req params:", req.params);
  ShoeModel.find()
    .then((dbRes) => {
      // console.log(dbRes);
      res.render("home.hbs", { shoes: dbRes });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/shoe/:id", (req, res, next) => {
  // console.log(req);
  // console.log(req.params);
  // console.log(req.query);
  ShoeModel.findById(req.params.id)
    .then((shoeDocument) => {
      res.render("shoe.hbs", { shoe: shoeDocument });
      // console.log(shoeDocument);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
