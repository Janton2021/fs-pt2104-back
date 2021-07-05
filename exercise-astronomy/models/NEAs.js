const mongoose = require('mongoose')
const {Schema} = mongoose

const NEASchema = new Schema({
    designation:{
        type: String,
    },
    discovery_date: {
        type: Date,
    },
    h_mag: {
        type: Number,
    },
    moid_au: {
        type: Number,
    },
    q_au_1: {
        type: Number,
    },
    q_au_2: {
        type: Number,
    },
    period_yr: {
        type: Number,
    },
    i_deg: {
        type: Number,
    },
    pha: {
        type: String,
    },
    orbit_class: {
        type: String, 
    }
})


module.exports = mongoose.model('NEAs', NEASchema)