const {
    deleteUser,
    getUsers,
} = require('../../queries/users')

module.exports = async (req, res, next)=> {
    const {name} = req.params
    if(!name){
        return next({
            status: 400,
            info: new Error('Introduce the name of the user you wish to delete')
        })
    }
    await deleteUser(name)
    const result = await getUsers()
    res.status(200).json({
        success: true,
        data: result,
    })
}