var express = require('express');
var router = express.Router(); 
const providersController = require('../controllers/providers'); // Import providers controller

/* GET list page. */
router.get('/', providersController.list); // http://localhost:3000/providers/

/* GET details page. */
router.get('/details/:id', providersController.details); // http://localhost:3000/providers/details/1

/* GET edit page. */
router.get('/edit/:id', providersController.edit); // http://localhost:3000/providers/edit/1

/* POST update page*/
router.post('/update/:id', providersController.update); // http://localhost:3000/providers/update/1

/* GET edit page. */
router.get('/add-provider', providersController.addform); // http://localhost:3000/providers/add-provider

/* POST add page. */
router.post('/add', providersController.add); // http://localhost:3000/providers/add

/* GET delete page. */
router.get('/delete/:id', providersController.delete); // http://localhost:3000/providers/delete/1



module.exports = router;
