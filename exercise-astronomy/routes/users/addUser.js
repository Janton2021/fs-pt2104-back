const { addUser, getUsers } = require('../../queries/users')

module.exports= async (req, res, next) => {
    const { name, nickname, affiliatedNumber, affiliationDate, occupation, birthdate, deleted, astronomicalPoints, badges: {name, given, info, points}, neasDiscovered, necsDiscovered} = req.body
    if(!name || !nickname || !birthdate){
        return next({
            status: 400,
            info: new Error('Please introduce a name, a nickname and a birthdate')
        })
    }
    await addUser({ name, nickname, affiliatedNumber, affiliationDate, occupation, birthdate, deleted, astronomicalPoints, badges: {name, given, info, points}, neasDiscovered, necsDiscovered})
    const result = await addUser()
    res.status(200).json({
        success: true,
        data: result,
    })
}

// 1 User