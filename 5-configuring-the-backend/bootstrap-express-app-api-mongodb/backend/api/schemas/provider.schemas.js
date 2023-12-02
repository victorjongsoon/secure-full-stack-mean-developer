const mongoose = require('mongoose');

// define a schema
const Schema = mongoose.Schema;

// create a company schema (sub-document)
const CompanySchema = new Schema(
    {
        "company_name": {type: String, required: true},
        "address": {type: String, required: true},
        "address2": {type: String},
        "city": {type: String, required: true},
        "state": {type: String, required: true, min: 2, max: 2},
        "postal_code": {type: String, required: true, min: 5},
        "phone": {type: String, required: true},
        "email": {type: String, required: true, unique: true},
        "description": {type: String},
        "tagline": {type: String}
    }
);

// create provider schema (top-level document)
const ProviderSchema = new Schema(
    {
        "firstname": {type: String, required: true},
        "lastname": {type: String, required: true},
        "position": {type: String},
        "company": CompanySchema,
    }
);

module.exports = {ProviderSchema, CompanySchema} // Export model for use in other modules