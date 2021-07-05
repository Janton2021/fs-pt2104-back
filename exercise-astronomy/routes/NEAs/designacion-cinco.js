const { getAllSongs } = require('../../queries/NEAs')

module.exports = async (req, res, next) => {
    const result = await getDesignacioCinco()

    if(result === false) {
        return next({
            status: 500,
            info: new Error('Try again a bit later')
        })
    }

    res.status(200).json({
        success: true,
        data: result,
    })
}