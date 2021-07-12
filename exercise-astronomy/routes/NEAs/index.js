const router = require('express').Router()

const getAllNEAs = require('./getAll')
const designacionUno = require('./designacion-uno');
const designacionDos = require('./designacion-dos');
const designacionTres = require('./designacion-tres');
const designacionCuatro = require('./designacion-cuatro');
const designacionCinco = require('./designacion-cinco');
const designacionSeis = require('./designacion-seis')

router.get('/', getAllNEAs)
router.get('/date/:discovery_date', designacionUno);
router.get('/date/:discovery_date', designacionDos);
router.get('/date/:discovery_date', designacionTres);
router.get('/date/:discovery_date', designacionCuatro);
router.get('/', designacionCinco);
router.get('/', designacion_seis);


module.exports = router