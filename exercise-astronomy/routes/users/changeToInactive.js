const changeToInactive = require('../../queries/users')

module.exports = async (req, res, next) => {
    const {name, nickname, affiliatedNumber, affiliationDate, occupation, birthdate, deleted, astronomicalPoints, badges: {name, given, info, points}, neasDiscovered, necsDiscovered} = req.params
    const {name, nickname, affiliatedNumber, affiliationDate, occupation, birthdate, deleted, astronomicalPoints, badges: {name, given, info, points}, neasDiscovered, necsDiscovered} = req.body
    if(!affiliatedNumber){
        return next({
            info: new Error('Introduce your affiliate number')
        })
    }

    res.status(200).json({
        success: true,
        data: 'Request successful',
    })
}

//10 User
