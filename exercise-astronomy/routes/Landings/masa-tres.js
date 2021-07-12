const { getAllSongs } = require('../../queries/Landings')

module.exports = async (req, res, next) => {
    const { year: yearValue } = req.params
    const result = await getMasaTres(yearValue)

    res.status(200).json({
        success: true,
        data: result,
    })
}

//getByDate