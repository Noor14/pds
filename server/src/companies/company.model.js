
'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const companiesSchema = new Schema({
    id: {
        type: Number, 
        unique: true
    },
    name: {
        type: String, 
        required: true, 
        trim: true
    },
    type: {
        type: String, 
        required: true, 
        trim: true
    },
    persons: { 
        type : Array, 
        required: true, 
        default: [] 
    },
  
    createdOn: {
        type: Date, 
        required: true, 
        default: Date.now
    }, 
    lastUpdatedOn: {
        type: Date, 
        required: true, 
        default: Date.now 
    },
    createdBy: Number, // id of user/admin
    lastUpdatedBy: Number, // id of user/admin

});

autoIncrement.initialize(mongoose.connection);
companiesSchema.plugin(autoIncrement.plugin, {
        model: 'companies',
        field: 'id',
        startAt: 100,
        incrementBy: 1
    });
module.exports = mongoose.model('companies', companiesSchema);
