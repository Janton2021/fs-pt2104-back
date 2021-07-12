const LandingModel = require('../models/Landings')

const getAllLandings = async () => {
	return await LandingModel.find({}, {_id:0, __V})
}

const getMasaUno = async (massValue) => {
	try {
		return await LandingModel.find({mass: {$gte: parseInt(massValue)}}, { _id: 0, name: 1, mass: 1})
	} catch (error) {
		return false;
	}
};

const getMasaDos = async (massValue) => {
	try {
		return await LandingModel.find({mass: parseInt(massValue)}, { _id: 0, name: 1, mass: 1} )
	} catch (error) {
		return false;
	}
}

const getNombre = async (classValue) => {
	try {
		return await LandingModel.find({class: classValue}, { _id: 0, name: 1, class: 1} )
	} catch (error){
		return false;
	}
}

const getMasaTres = async (dateValue) => {
	try {
		return await LandingModel.find({year: dateValue}, { _id: 0, name: 1, mass: 1, year: 1} )
	} catch (error){
		return false;
	}
}


module.exports = {
	getAllLandings,
    getMasaUno,
    getMasaDos,
    getNombre,
    getMasaTres,
}

