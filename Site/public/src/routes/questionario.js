var express = require("express");
var router = express.Router();
var questionarioController = require("../controllers/questionarioController");

router.post("/cadastrarQuestionario", function(req, res) {
    questionarioController.cadastrarQuestionario(req, res);
});

module.exports = router;
