const providers = require('../models/providers'); // Import providers model
// List Providers
module.exports.list = function (req, res) {
    res.render('providers/providers-list', { title: 'Service Provider', providers: providers }); // Render the providers-list.hbs view
}

// Provider Details
module.exports.details = function (req, res) {
    let id = req.params.id; // Get id from request parameters
    let provider = providers.find(provider => provider.id == id); // Find provider by id
    res.render('providers/providers-details', {
        id: id, title:
            'Service Provider Details', company: provider.company
    }); // Render the providers-list.hbs view
}

// Edit Provider Details
module.exports.edit = function (req, res) {
    let id = req.params.id; // Get id from request parameters
    let provider = providers.find(provider => provider.id == id); // Find provider by id
    res.render('providers/providers-edit', {
        id: id, title:
            'Service Provider Edit', provider: provider
    });  // Render the providers-edit.hbs view
}

// Update Provider Details
module.exports.update = function (req, res) {
    let id = req.params.id; // Get id from request parameters
    let provider = providers.find(provider => provider.id == id); // Find provider by id
    provider.firstname = req.body.firstname; // Update provider firstname
    provider.lastname = req.body.lastname; // Update provider lastname
    provider.position = req.body.position; // Update provider position
    provider.company.company_name = req.body.company_name; // Update provider company name
    provider.company.address = req.body.address; // Update provider company address
    provider.company.address2 = req.body.address2; // Update provider company address2
    provider.company.city = req.body.city; // Update provider company city
    provider.company.state = req.body.state; // Update provider company state
    provider.company.postal_code = req.body.postal_code; // Update provider company postal_code
    provider.company.phone = req.body.phone; // Update provider company city
    provider.company.email = req.body.email; // Update provider company state
    provider.company.description = req.body.description; // Update provider company description
    provider.company.tagline = req.body.tagline; // Update provider company tagline
    res.render('providers/providers-update', { title: 'Update' });  // Render the providers-edit.hbs view
}


// Add Form
module.exports.addform = function (req, res) {
    res.render('providers/providers-add-form', { title: 'Add' });  // Render the providers-edit.hbs view
}

// Add Provider
module.exports.add = function (req, res) {
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
            company_name : req.body.company_name, // Add provider company name
            address : req.body.address, // Add provider company address
            address2 : req.body.address2, // Add provider company address2
            city : req.body.city, // Add provider company city
            state: req.body.state, // Add provider company state
            postal_code : req.body.postal_code, // Add provider company postal_code
            phone : req.body.phone, // Add provider company city
            email : req.body.email, // Add provider company state
            description : req.body.description, // Add provider company description
            tagline : req.body.tagline, // Add provider company tagline
        }
    }
    // Add new provider to providers array
    providers.push(provider); // Push provider object to providers array
    res.render('providers/providers-update', { title: 'Update' }); // Render the providers-edit.hbs view
}