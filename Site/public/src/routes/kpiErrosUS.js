var express = require("express");
var router = express.Router();
var kpiErrosUSController = require("../controllers/kpiErrosUSController");

router.get("/kpiErrosUS/:email", function(req, res) {
    kpiErrosUSController.kpiErrosUS(req, res);
});

module.exports = router;
