const { getAllSongs } = require('../../queries/NEAs')

module.exports = async (req, res, next) => {
    const { discovery_date } = req.params
    const result = await getDesignacionCuatro(discovery_date)

    res.status(200).json({
        success: true,
        data: result,
    })
}

//getByDateRange