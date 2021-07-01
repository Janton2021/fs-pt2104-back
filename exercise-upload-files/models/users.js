const mongoose = require("mongoose")
const{ Schema } = mongoose

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    birthdate: {
        type: Date,
        required: true,
    },
    profile_pic: {
        type: String,
        required: true,
    },
    enabled: {
        type: Boolean,
        default: true,
        required: true,
    }

})
module.exports = mongoose.model('Users', UserSchema)