var express = require("express");
var router = express.Router();
var idiomsController = require("../controllers/objectsController");

router.post("/objects", function(req, res) {
    idiomsController.cadastrar(req, res);
});

module.exports = router;
