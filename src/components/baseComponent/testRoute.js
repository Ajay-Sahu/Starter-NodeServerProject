var express = require('express');
var router = express.Router();


const testController = require("./testController.js")




router.get('/testing1', testController.testApi);

router.get('/testing2', testController.demo);

router.get('/testing3', testController.auth);













// Return router
module.exports = router;

