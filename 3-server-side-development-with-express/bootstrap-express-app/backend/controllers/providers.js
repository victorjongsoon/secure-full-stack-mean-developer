const providers = require('../models/providers'); // Import providers model

module.exports.list = function(req, res) {
    res.render('providers/providers-list', {title: 'Service Provider', providers: providers}); // Render the providers-list.hbs view
}