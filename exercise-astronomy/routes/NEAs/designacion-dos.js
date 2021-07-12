const { getAllSongs } = require('../../queries/NEAs')

module.exports = async (req, res, next) => {
    const { discovery_date: yearValue}
    const result = await getDesignacionDos(yearValue)


    res.status(200).json({
        success: true,
        data: result,
    })
}

//getByDateGTE