const { nombre } = require('../../queries/Landings')

module.exports = async (req, res, next) => {
    const { class: classValue } = req.params
    const result = await getNombre(classValue)

    res.status(200).json({
        success: true,
        data: result,
    })
}

//getByClass