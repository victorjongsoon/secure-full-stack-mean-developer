const providers = require('../models/providers'); // Import providers model

module.exports.list = function(req, res) {
    res.render('providers/providers-list', {title: 'Service Provider', providers: providers}); // Render the providers-list.hbs view
}

module.exports.details = function(req, res) {
    let id = req.params.id; // Get id from request parameters
    let provider = providers.find(provider => provider.id == id); // Find provider by id
    res.render('providers/providers-details', {id : id, title: 'Service Provider Details', company: provider.company}); // Render the providers-list.hbs view
}