const addNeaAndBadgeToUser = require('../../queries/users')

module.exports = async (req, res, next) => {
    const {name, nickname, affiliatedNumber, affiliationDate, occupation, birthdate, astronomicalPoints, badges, neasDiscovered, necsDiscovered} = req.params
    const {name, nickname, affiliatedNumber, affiliationDate, occupation, birthdate, astronomicalPoints, badges, neasDiscovered, necsDiscovered} = req.body
    if(!name || !affiliatedNumber){
        return next({
            info: new Error('Introduce your name and the name of the NEA you just discovered')
        })
    }
    const result = await addNeaAndBadgeToUser(id, {name, nickname, affiliatedNumber, affiliationDate, occupation, birthdate, astronomicalPoints, badges, neasDiscovered, necsDiscovered})

    res.status(200).json({
        success: true,
        data: result,
    })
}

//8 User