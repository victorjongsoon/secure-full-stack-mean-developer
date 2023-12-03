const mongoose = require('mongoose');
const {ProviderSchema} = require('../schemas/provider.schemas');

// Create a provider model
const Provider = mongoose.model('Provider', ProviderSchema);

module.exports = {Provider}; // Export model for use in other modules
