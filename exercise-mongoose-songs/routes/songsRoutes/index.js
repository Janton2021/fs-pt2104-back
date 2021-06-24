// Importar routes desde express
const router = require("express").Router();
const SongsModel = require('../../models/Songs');

/* Aquí estamos creando el CRUD para las canciones */
// Crear la ruta para GET
router.get("/get-songs", async (req, res) => {
    const result = await SongsModel.find({});
    res.send(result);
});
// Crear la ruta para POST
router.post('/create-song', async (req, res) => {
    const newSong = req.body;
    const result = await SongsModel.create(newSong);
    res.send(result);
});
// Crear la ruta para PUT
router.put('/update-song/:youtube_id', async (req, res) => {
    const modifiedSong = req.body;
    const searchParam = req.params.youtube_id;
  
    const result = await SongsModel.findOneAndUpdate(
      { youtube_id: searchParam }, 
      modifiedSong, 
      { new: true }
    );
    console.log('Canción Modificada: '+result);
    res.send(result);
  });

// Crear la ruta para DELETE
router.delete('/delete-one/:youtube_id', async (req, res) => {
    const {youtube_id} = req.params
    const result = await SongsModel.findOneAndDelete({ youtube_id });
    res.send(result);
  })

// Exportar la ruta
module.exports = router;