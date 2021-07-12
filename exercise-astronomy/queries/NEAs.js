const NEAModel = require('../models/NEAs')

const getAll = async () => {
	return await NEAModel.find({}, {_id:0, __v:0})
	}

const getDesignacionUno = async (x) => {
    try {
        const dateParse = Date.parse(x);
		return await NEAModel.find({discovery_date: dateParse}, {designation: 1, discovery_date: 1, period_yr:1, orbit_class:1})
	} catch (error) {
		return false;
	}
}

const getDesignacionDos = async (x) => {
    try {
        const dateParse = Date.parse(x);
		return await NEAModel.find({discovery_date: {$gte: dateParse}}, {designation: 1, discovery_date: 1, period_yr:1, orbit_class:1})
	} catch (error) {
		return false;
	}
}

const getDesignacionTres = async (x) => {
    try {
        const dateParse = Date.parse(x);
		return await NEAModel.find({discovery_date: {$lte: dateParse}}, {designation: 1, discovery_date: 1, period_yr:1, orbit_class:1})
	} catch (error) {
		return false;
	}
}

const getDesignacionCuatro = async (x, y) => {
    try {
        const dateParseX = Date.parse(x);
        const dateParseY = Date.parse(y);
		return await NEAModel.find({$and: [{discovery_date: {$gte: dateParseX}, discovery_date: {$lte: dateParseY}}]}, {designation: 1, discovery_date: 1, period_yr:1, orbit_class:1})
	} catch (error) {
		return false;
	}
}

const getDesignacionCinco = async (orbit) => {
    try {
		return await NEAModel.find({orbit_class: orbit}, { _id: 0, designation: 1, period_yr: 1} )
	} catch (error){
		return false;
	}
}

const getDesignacionSeis = async (periodYr) => {
    try {
		return await NEAModel.find({period_yr: periodYr}, {designation: 1, period_yr: 1} )
	} catch (error){
		return false;
	}
}

module.exports = {
    getDesignacionUno,
    getDesignacionDos,
    getDesignacionTres,
    getDesignacionCuatro,
    getDesignacionCinco,
    getDesignacionSeis,
}
