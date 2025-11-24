var express = require("express");
var router = express.Router();
var kpiTaxaAcertoUKController = require("../controllers/kpiTaxaAcertoUKController");

router.get("/kpiTaxaAcertoUK/:email", function(req, res) {
    kpiTaxaAcertoUKController.kpiTaxaAcertoUK(req, res);
});

module.exports = router;
