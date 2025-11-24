var express = require("express");
var router = express.Router();
var kpiTaxaAcertoUSController = require("../controllers/kpiTaxaAcertoUSController");

router.get("/kpiTaxaAcertoUS/:email", function(req, res) {
    kpiTaxaAcertoUSController.kpiTaxaAcertoUS(req, res);
});

module.exports = router;
