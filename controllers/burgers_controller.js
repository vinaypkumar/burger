var express=require('express');
var burger=require('../models/burger.js');
var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var obj = {
      burgers: data
    };
    console.log(obj);
    res.render("index", obj);
  });
});

router.post("/", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.name], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;  

  burger.update({devoured: req.body.devoured}, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
