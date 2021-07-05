const mongoose = require('mongoose')
const {Schema} = mongoose

const BadgesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    given: {
        type: Boolean,
        required: true,
        default: false
    },
    info: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    }

})

const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String
    },
    affiliatedNumbre: {
        type: Number,
        required: true,
        unique: true
    },
    affiliatonDate: {
        type: Date
    },
    occupation: {
        type: String
    },
    deleted: {
        type: Boolean
    },
    astronomicalPoints: {
        type: Number
    },
    badges: [
        {
            type: BadgesSchema,
            required: true
        }
    ]
})

module.exports = mongoose.model('Users', UserSchema)
