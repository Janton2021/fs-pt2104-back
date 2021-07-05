const router = require('express').Router()

const masaUno = require('./masa-uno');
const masaDos = require('./masa-dos');
const nombre = require('./nombre');
const masaTres = require('./masa-tres');

router.get('/', masaUno);
router.get('/', masaDos);
router.get('/', nombre);
router.get('/', masaTres);



module.exports = router