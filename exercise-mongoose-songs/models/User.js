const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    
    playlist: {
        type: [{ type: Schema.Types.ObjectId, ref: "SongsCollection"}]
    }
    
});

const User = mongoose.model("User", UserSchema);

module.exports = User;