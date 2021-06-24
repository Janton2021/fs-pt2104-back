const mongoose = require("mongoose");
const { Schema } = mongoose;
// Importar Schema desde mongoose

const SongSchema = new Schema({
    artist: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        unique: true,
      },
      name: {
        type: String,
        required: true,
      },
      youtube_id: {
        type: String,
        unique: true,
      },
});

const Songs = mongoose.model("Songs", SongSchema);

module.exports = Songs;
