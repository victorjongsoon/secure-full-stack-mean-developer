var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main.controller'); // Import providers controller

//HTTP Verbs: POST, GET, PUT, DELETE

//Post /api/providers
router.post('/providers', mainController.create); // http://localhost:3000/api/providers

//Get /api/providers
router.get('/providers', mainController.readAll); // http://localhost:3000/api/providers

//Get One /api/providers/:id
router.get('/providers/:id', mainController.readOne); // http://localhost:3000/api/providers/1

//Put /api/providers/:id
router.put('/providers/:id', mainController.update); // http://localhost:3000/api/providers/1

//Delete One /api/providers/:id
router.delete('/providers/:id', mainController.deleteOne); // http://localhost:3000/api/providers/1

//Delete All /api/providers
router.delete('/providers', mainController.deleteAll); // http://localhost:3000/api/providers

// If no matching route
router.post('/*', notFound);
router.get('/*', notFound);
router.delete('/*', notFound);
router.put('/*', notFound);

function notFound(req, res) {
    res.status(404);
    res.send('Not valid route');
    return; // Make sure to return after sending the response
}


module.exports = router;