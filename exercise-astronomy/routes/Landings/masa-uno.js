const { getAllSongs } = require('../../queries/Landings')

module.exports = async (req, res, next) => {
    const { mass: massValue } = req.params
    const result = await getMasaUno(massValue)

    res.status(200).json({
        success: true,
        data: result,
    })
}

//getMassLTE