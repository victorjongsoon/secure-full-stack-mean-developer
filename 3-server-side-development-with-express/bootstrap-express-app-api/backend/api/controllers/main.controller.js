const providers = require('../models/providers.models'); // Import providers model

// CRUD - Create (POST), Read (GET), Update (PUT), Delete (DELETE)

//POST /api/providers
module.exports.create = function(req, res) {
    // generate random id
    let min = 100000;
    let max = 999999;
    let id = Math.floor(Math.random() * (max - min + 1)) + min;
    // Create new provider object
    let provider = {
        id : id, // Add provider id
        firstname : req.body.firstname, // Add provider firstname
        lastname : req.body.lastname, // Add provider lastname
        position : req.body.position, // Add provider position
        company : {
            company_name: req.body.company.company_name, // Add provider company name
            address: req.body.company.address, // Add provider company address
            address2: req.body.company.address2, // Add provider company address2
            city: req.body.company.city, // Add provider company city
            state: req.body.company.state, // Add provider company state
            postal_code: req.body.company.postal_code, // Add provider company postal_code
            phone: req.body.company.phone, // Add provider company phone
            email: req.body.company.email, // Add provider company email
            description: req.body.company.description, // Add provider company description
            tagline: req.body.company.tagline, // Add provider company tagline
        }
    }
    // Add new provider to providers array
    providers.push(provider); // Push provider object to providers array
    res.status(200);
    res.send(provider); 
};

//GET /api/providers
module.exports.readAll = function(req, res) {
    res.status(200);
    res.send(providers);
};

//GET One /api/providers/:id
module.exports.readOne = function(req, res) {
    let id = req.params.id; // Get id from request parameters
    let provider = providers.find(provider => provider.id == id); // Find provider by id
    res.status(200);
    res.send(provider);
};

//PUT /api/providers/:id
module.exports.update = function(req, res) {
    let id = req.params.id; // Get id from request parameters
    let provider = providers.find(provider => provider.id == id); // Find provider by id
    
    provider.firstname = req.body.firstname; // Update provider firstname
    provider.lastname = req.body.lastname; // Update provider lastname
    provider.position = req.body.position; // Update provider position

    provider.company.company_name = req.body.company.company_name;
    provider.company.address = req.body.company.address;
    provider.company.address2 = req.body.company.address2; 
    provider.company.city = req.body.company.city; 
    provider.company.state = req.body.company.state; 
    provider.company.postal_code = req.body.company.postal_code; 
    provider.company.phone = req.body.company.phone; 
    provider.company.email = req.body.company.email; 
    provider.company.description = req.body.company.description; 
    provider.company.tagline = req.body.company.tagline; 

    res.status(200);
    res.send(provider);
};

//DELETE one /api/providers/:id
module.exports.deleteOne = function(req, res) {
    let id = req.params.id; // Get id from request parameters
    let provider = providers.find(provider => provider.id == id); // Find provider by id
    let idx = providers.indexOf(provider); // Find index of provider in providers array
    providers.splice(idx, 1); // Delete provider from providers array

    res.status(200); // res.status(404); has been deleted
    res.send(provider);  
};

//DELETE all /api/providers
module.exports.deleteAll = function(req, res) {
    providers = []; // Delete all providers from providers array
    res.status(200);
    res.send("All Providers Deleted")
};

