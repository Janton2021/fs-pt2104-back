const router = require('express').Router()
const { single } = require('../../configs/multer')
const { checkFile } = require('../../middlewares')
const createUser = require('./create-user')


router.post('/new', [single, checkFile], createUser)

module.exports = router

