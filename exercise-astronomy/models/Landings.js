const mongoose = require('mongoose')
const {Schema} = mongoose

const geoSchema = new Schema({
    latitude: {
        type: Number,
        
    },
    longitude: {
        type: Number,
        
    }
})

const LandingsSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    nametype: {
        type: String,
    },
    recclass: {
        type: String,
    },
    mass: {
        type: Number,
    },
    fall: {
        type: String,
    },
    year: {
        type: Date,
        
    },
    reclat: {
        type: Number,
        
    },
    reclong: {
        type: Number,
        
    },
    geolocation: {
        type: geoSchema
    }


})

module.exports = mongoose.model('Landings', BadgesSchema)
