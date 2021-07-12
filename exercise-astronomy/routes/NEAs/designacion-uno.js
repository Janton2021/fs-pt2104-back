const { getAllSongs } = require('../../queries/NEAs')

module.exports = async (req, res, next) => {
    const { discovery_date : yearValue } = req.params
    const result = await getDesignacionUno(yearValue)

    res.status(200).json({
        success: true,
        data: result,
    })
}

//getByDate