const {getByPeriodYr} = require('../../queries/neas')

module.exports = async (req, res, next) => {
    const { period_yr: periodValue } = req.params
    const result = await getByPeriodYr(periodValue)
    
    res.status(200).json({
        success: true,
        data: result,
    })
}

//getByPeriodYr