const getNeasByAffNumber = require('../../queries/users')

module.exports = async (req, res, next) => {
    const { affiliatedNumber } = req.params
    const {name, nickname, affiliatedNumber, affiliationDate, occupation, birthdate, deleted, astronomicalPoints, badges: {name, given, info, points}, neasDiscovered, necsDiscovered} = req.body
    if(!affiliatedNumber){
        return next({
            info: new Error('Introduce your affiliation number')
        })
    }
    const result = await getNeasByAffNumber(id, {name, nickname, affiliatedNumber, affiliationDate, occupation, birthdate, deleted, astronomicalPoints, badges: {name, given, info, points}, neasDiscovered, necsDiscovered})

    res.status(200).json({
        success: true,
        data: result,
    })
}

// 4 User
