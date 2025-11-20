var express = require("express");
var router = express.Router();
var questionarioController = require("../controllers/questionarioController");

router.post("/cadastrar", function(req, res) {
    questionarioController.cadastrar(req, res);
});

module.exports = router;
