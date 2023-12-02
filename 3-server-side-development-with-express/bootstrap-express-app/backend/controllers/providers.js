const providers = require('../models/providers'); // Import providers model
// List Providers
module.exports.list = function(req, res) {
    res.render('providers/providers-list', {title: 'Service Provider', providers: providers}); // Render the providers-list.hbs view
}

// Provider Details
module.exports.details = function(req, res) {
    let id = req.params.id; // Get id from request parameters
    let provider = providers.find(provider => provider.id == id); // Find provider by id
    res.render('providers/providers-details', {id : id, title:
         'Service Provider Details', company: provider.company}); // Render the providers-list.hbs view
}

// Edit Provider Details
module.exports.edit = function(req, res) {
    let id = req.params.id; // Get id from request parameters
    let provider = providers.find(provider => provider.id == id); // Find provider by id
    res.render('providers/providers-edit', {id : id, title:
         'Service Provider Edit', provider: provider});  // Render the providers-edit.hbs view
}

// Update Provider Details
module.exports.update = function(req, res) {
    let id = req.params.id; // Get id from request parameters
    let provider = providers.find(provider => provider.id == id); // Find provider by id
    provider.firstname = req.body.firstname; // Update provider firstname
    provider.lastname = req.body.lastname; // Update provider lastname
    provider.position = req.body.position; // Update provider position
    provider.company.company_name = req.body.company_name; // Update provider company name
    provider.company.address = req.body.address; // Update provider company address
    provider.company.address2 = req.body.address2; // Update provider company address2
    provider.company.postal_code = req.body.postal_code; // Update provider company postal_code
    provider.company.phone = req.body.phone; // Update provider company city
    provider.company.email = req.body.email; // Update provider company state
    provider.company.description = req.body.description; // Update provider company description
    provider.company.tagline = req.body.tagline; // Update provider company tagline
    
    res.render('providers/providers-update', {title: 'Update'});  // Render the providers-edit.hbs view
}


