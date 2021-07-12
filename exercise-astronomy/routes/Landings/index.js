const router = require('express').Router()

const getAllLandings = require('./getAllLandings')
const masaUno = require('./masa-uno');
const masaDos = require('./masa-dos');
const nombre = require('./nombre');
const masaTres = require('./masa-tres');

router.get('/', getAllLandings)
router.get('/mass/:mass', masaUno);
router.get('/mass/:mass', masaDos);
router.get('/class/:recclass', nombre);
router.get('/', masaTres);



module.exports = router