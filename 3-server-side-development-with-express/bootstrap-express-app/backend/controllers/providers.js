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
    res.render('providers/providers-update', {title: 'Update'});  // Render the providers-edit.hbs view
}


