const { getAllSongs } = require('../../queries/NEAs')

module.exports = async (req, res, next) => {
    const { orbit_class: classValue } = req.params
    const result = await getDesignacioCinco(classValue)

    res.status(200).json({
        success: true,
        data: result,
    })
}

//getByOrbitClass