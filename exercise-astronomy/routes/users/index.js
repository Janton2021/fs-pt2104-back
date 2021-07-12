const router = require('express').Router()

const addUser = require('./addUser')
const getUsers = require('./getUsers')
const getBadgesByAffNumber = require('./getBadgesByAffNumber')
const getByAffNumber = require('./getByAffNumber')
const getNeasByAffNumber = require('./getNeasByAffNumber')
const getNecsByAffNumber = require('./getNecsByAffNumber')
const getPointsByAffNumber = require('./getPointsByAffNumber')
const editNickAndOccupation = require('./editNickAndOccupation')
const addNeaAndBadgeToUser = require('./addNeaAndBadgeToUser')
const addNecAndBadgeToUser = require('./addNecAndBadgeToUser')
const changeToInactive = require('./changeToInactive')
const deleteUser = require('./deleteUser')


router.post('/astronomy/guild', addUser)
router.get('/astronomy/guild', getUsers)
router.get('/astronomy/guild', getBadgesByAffNumber)
router.get('/astronomy/guild/:affiliatedNumber', getByAffNumber)
router.get('/astronomy/guild/:affiliatedNumber', getNeasByAffNumber)
router.get('/astronomy/guild/:affiliatedNumber', getNecsByAffNumber)
router.get('/astronomy/guild/:affiliatedNumber', getPointsByAffNumber)
router.put('/astronomy/guild/:affiliatedNumber', editNickAndOccupation)
router.put('astronomy/guild', addNeaAndBadgeToUser)
router.put('astronomy/guild', addNecAndBadgeToUser)
router.put('astronomy/guild', changeToInactive)
router.delete('/astronomy/guild/:affiliatedNumber', deleteUser)


module.exports = router