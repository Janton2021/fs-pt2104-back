const router = require('express').Router()

const designacionUno = require('./designacion-uno');
const designacionDos = require('./designacion-dos');
const designacionTres = require('./designacion-tres');
const designacionCuatro = require('./designacion-cuatro');
const designacionCinco = require('./designacion-cinco');

router.get('/', designacionUno);
router.get('/', designacionDos);
router.get('/', designacionTres);
router.get('/', designacionCuatro);
router.get('/', designacionCinco);


module.exports = router