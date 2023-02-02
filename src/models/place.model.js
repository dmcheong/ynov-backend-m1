const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 0,
        max: 50
    },
    type: {
       appartement: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 2,
        maxLength: 50
       },
       loft: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 2,
        maxLength: 50
       },
       maison: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 2,
        maxLength: 50
       },
       chateau: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 2,
        maxLength: 50
       },
       cabane: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 2,
        maxLength: 50
       },
       camping: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 2,
        maxLength: 50
       }
    },
    types: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    pricing: {
        perDay: {
            type: Number     
        }
    },
    image: {
        imgName: [String]},
    capacity: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minLength: 50,
        maxLength: 300
    },
    adresse : {
        city:{
            type: String,
        street: String,
        zipCode: {
            type: Number,
            minLength: 50,
            maxLength: 300,
        gps: {
            lat:{
                type: Number,
                required: true,
                trim: true,
                lowercase: true,
                min: 0,
                max: 20
            },
            long:{
                type: Number,
                required: true,
                trim: true,
                lowercase: true,
                min: 0,
                max: 20
            }
        }
    }

})

module.exports = mongoose.model('Place',placeSchema);