const mongoose = require('mongoose');
const {Provider} = require('../models/provider');

// connection uri to mongodb
const uri = 'mongodb://localhost:27017/provider_db';

// make db connection (asynchronously)
mongoose.connect(uri)
    .then(result => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.log('Error connecting to MongoDB', error);
    });

module.exports = Provider; // Export model for use in other modules