const router = require('express').Router();

router.use('/Landings', require('./Landings'));
router.use('/NEAs', require('./NEAs'));
router.use('/users', require('./users'));


module.exports = router;