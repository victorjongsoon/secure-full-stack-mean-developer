let providers = require('../models/providers.models'); // Import providers model
const Provider = require('../db/db'); // Import providers model
const { ObjectId } = require('mongodb'); // Import ObjectId type from MongoDB

// Util functions
// Check if list is empty
function isEmptyList(obj) {
    return (!obj || obj.length == 0 || Object.keys(obj).length == 0);
}

// Handle Error
function handleError(res, error) {
    res.status(500).send("Internal Server Error"); // Set 500 status for internal server error
}

// check for existing id
/*
function existsProviderId(id) {
    let provider = providers.find(provider => provider.id == id); // Find provider by id
    return provider;
}
*/

// generate a unique id
/*
function getUniqueId(providers) {
    let min = 100000;
    let max = 999999;
    do {
        var id =  Math.floor(Math.random() * (max - min + 1)) + min;
    } while(existsProviderId(id));

    return id;
}
*/

// CRUD - Create (POST), Read (GET), Update (PUT), Delete (DELETE)

//POST /api/providers
module.exports.create = function (req, res) {
    try {
        var provider = req.body; // get new provider from request body
        Provider.create(provider)
            .then(result => {
                res.status(201);
                res.send(provider);
            })
        /*
        if (isEmptyList(providers)) {
            providers = [];
        }
        */

    } catch (error) {
        handleError(res, error);
    }

    /*
    var id = req.body.id;
    if (existsProviderId(id)) {
        res.status(400);
        res.send("Provider id already exists");
        id = getUniqueId(providers); // Generate unique id
    }
    */


    // provider.id = id; // Add id to provider object

    // Add new provider to providers array
    // providers.push(provider); // Push provider object to providers array


    /*
    Create new provider object
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
    */
};



//GET /api/providers
module.exports.readAll = function (req, res) {
    try {
        Provider.find()
            .then(result => {
                if (isEmptyList(providers)) {
                    res.status = 404;
                    res.send("No Providers Found");
                }
                res.status(200);
                res.send(result);
            }).catch(error => {
                handleError(res, error);
            });
    } catch (error) {
        handleError(res, error);
    }
};

//GET One /api/providers/:id
module.exports.readOne = function (req, res) {

    try {
        let id = req.params.id; // Get id from request parameters

        Provider.find({ 'id': id })
            .then(result => {

                if (isEmptyList(result)) {
                    res.status(404);
                    res.send("No Providers Found");
                }

                // let provider = providers.find(provider => provider.id == id); // Find provider by id
                res.status(200);
                res.send(result);
            })
            .catch(error => {
                handleError(res, error);
            });

    } catch (error) {
        handleError(res, error);
    }
};

//PUT /api/providers/:id
module.exports.update = function (req, res) {

    try {
        let id = req.params.id; // Get id from request parameters
        let provider = req.body;
        Provider.findOneAndUpdate({ 'id': id }, provider, { new: true })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(400);
                    res.send("List is Empty. Cannot Update Provider");
                }
                res.status(200);
                res.send(result);
            }).catch(error => {
                handleError(res, error);
            });
    } catch (error) {
        handleError(res, error);
    }

    /*
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
    */

};

//DELETE one /api/providers/:id
module.exports.deleteOne = function (req, res) {
    try {
        let id = req.params.id; // Get id from request parameters
        Provider.findOneAndDelete({ 'id': id })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(404);
                    res.send("List is Empty. Cannot Delete Provider");
                }
                res.status(200);
                res.send(result);
            }).catch(error => {
                handleError(res, error);
            });
    } catch (error) {
        handleError(res, error);
    }


    /*

    let provider = providers.find(provider => provider.id == id); // Find provider by id
    let idx = providers.indexOf(provider); // Find index of provider in providers array
    providers.splice(idx, 1); // Delete provider from providers array
    */


};

//DELETE all /api/providers
module.exports.deleteAll = function (req, res) {
    try{
        Provider.deleteMany().then(result => {
            if (result.deletedCount == 0) {
                res.status(404);
                res.send("List is Empty. Cannot Delete Provider");
            }

            res.status(200);
            res.send("All Providers Deleted")
        }).catch(error => {
            handleError(res, error);
        });
    } catch (error) {
        handleError(res, error);
    }
};

