var express = require("express");
var router = express.Router();
var kpiErrosUKController = require("../controllers/kpiErrosUKController");

router.get("/kpiErrosUK/:email", function(req, res) {
    kpiErrosUKController.kpiErrosUK(req, res);
});

module.exports = router;
