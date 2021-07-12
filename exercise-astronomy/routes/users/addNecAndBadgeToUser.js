const addNecAndBadgeToUser = require('../../queries/users')

module.exports = async (req, res, next) => {
    const {name, nickname, affiliatedNumber, affiliationDate, occupation, birthdate, astronomicalPoints, badges, neasDiscovered, necsDiscovered} = req.params
    const {name, nickname, affiliatedNumber, affiliationDate, occupation, birthdate, astronomicalPoints, badges, neasDiscovered, necsDiscovered} = req.body
    if(!name || !affiliatedNumber){
        return next({
            info: new Error('Introduce your name and the name of the NEC you just discovered')
        })
    }
    const result = await addNecAndBadgeToUser(id, {name, nickname, affiliatedNumber, affiliationDate, occupation, birthdate, astronomicalPoints, badges, neasDiscovered, necsDiscovered})

    res.status(200).json({
        success: true,
        data: result,
    })
}

//9 User