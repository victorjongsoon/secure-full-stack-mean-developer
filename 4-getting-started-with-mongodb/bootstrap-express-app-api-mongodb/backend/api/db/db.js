const mongoose = require('mongoose');

// connection uri to mongodb
const uri = 'mongodb://localhost:27017/provider_db';

// make db connection (asynchronously)
module.exports = mongoose.connect(uri)
    .then(result => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.log('Error connecting to MongoDB', error);
    });