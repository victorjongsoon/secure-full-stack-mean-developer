var express = require('express');
var router = express.Router(); 
const providersController = require('../controllers/providers'); // Import providers controller

/* GET list page. */
router.get('/', providersController.list); // http://localhost:3000/providers/


module.exports = router;
