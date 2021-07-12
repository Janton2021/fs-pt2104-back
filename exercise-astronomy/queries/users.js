const { now } = require('mongoose')
const UserModel = require('../models/users')
const badges = [
	{"name": "My first day as astro-rookie!",
	"given": true,
	"info": "for joining Astronomy Guild",
	"points": 10
	},
	{"name": "First NEA discovered!",
	"given": false,
	"info": "for discovering your first near-earth asteroid",
	"points": 100
    } ,
	{"name": "First NEC discovered!",
	"given": false,
	"info": "for discovering your first near-earth comet",
	"points": 100
	},
	{"name": "Road to NE-lhalla!",
	"given": false,
	"info": "for discovering 5 Objects between NEAs and NECs",
	"points": 500
	},
	{"name": "Master of the universe!",
	"given": false,
	"info": "for discovering 10 Objects between NEAs and NECs",
	"points": 1000
	},
	{"name": "The best astronomer!",
	"given": false,
	"info": "for obtaining all previous badges",
	"points": 10000
	},
];

const astroPoints = async () => {
	UserModel.find({badges: {points}})
	const result = badges.reduce(function(acc, el, ind, arr){
		return acc += badges.points
		}, 0)
	}



const newBadge = (badges) => {
	for(let i = 0; i < badges.length; i++){
		return  `You've been awarded our ${badges[i].name} badge ${badges[i].info} and ${badges[i].points} points. You now have ${astroPoints()}`
    }
}

//name, nickname, affiliatedNumber, affiliationDate, occupation, birthdate, deleted, astronomicalPoints, badges {name, given, info, points}, neasDiscovered, necsDiscovered.

const addUser = async ({ user, birthdate}) => {
    
	const {name: user, nickname, birthdate, astronomicalPoints: points, badges: {badgename, given, info, points}, neasDiscovered, necsDiscovered} = await UserSchema
            .create({ user, birthdate })
	const age = now-birthdate;
    return { name: user, nickname, affiliatedNumber: number, affiliationDate, occupation, age, deleted, astronomicalPoints: points, badges: {badgename, given, info, points}, neasDiscovered, necsDiscovered}  /// Cambiar 'birth' por 'age'
}

const getUsers = async () => {
    try {
        return await UserModel.find({}, { _id: 0, __v: 0 })
    } catch(error) {
        return false
    }
}


const getBadgesByAffNumber = async ({affiliatedNumber}) => {
	try {
		return await UserModel.findOne({affiliatedNumber}, {user, nickname, affiliatedNumber, badges: {badgename, given, info, points}})
	}
	catch(error) {
		return false
	}
}


const getByAffNumber = async ({affiliatedNumber}) => {
	try {
        return await UserModel.find({affiliatedNumber}, {user, nickname, affiliatedNumber: number, affiliationDate, occupation, age, deleted, astronomicalPoints: points, badges: {badgename, given, info, points}, neasDiscovered, necsDiscovered})
    } catch(error) {
        return false
    }
}


const getNeasByAffNumber = async ({affiliatedNumber}) => {
	try {
        return await UserModel.find({affiliatedNumber}, {user, nickname, affiliatedNumber: number, neasDiscovered})
    } catch(error) {
        return false
    }
}



const getNecsByAffNumber = async ({affiliatedNumber}) => {
	try {
        return await UserModel.find({affiliatedNumber}, {user, nickname, affiliatedNumber: number, necsDiscovered})
    } catch(error) {
        return false
    }
}


const getPointsByAffNumber = async ({affiliatedNumber}) => {
	try {
        return await UserModel.find({affiliatedNumber}, {user, nickname, affiliatedNumber: number, astronomicalPoints: points})
    } catch(error) {
        return false
    }
}

const addNeaAndBadgeToUser = async user => {
	return await UserModel.findOneAndUpdate(
        { user },
        { $addToSet: { neasDiscovered, badges: {badgename, given, info, points}}},
        { new: true }
    )
}

const addNecAndBadgeToUser = async user => {
    return await UserModel.findOneAndUpdate(
        { user },
        { $addToSet: { necsDiscovered, badges: {badgename, given, info, points}}},
        { new: true }
    )
}

const editNickAndOccupation = async user => {
	return await UserModel.findOneAndUpdate(
        { user },
        { nickname, occupation},
        { new: true }
    )
}


const changeToInactive = async user => {
	return await UserModel.findOneAndUpdate(
        { user },
        { deleted},
    )
}


const deleteUser = async user => {
	return await UserModel.findOneAndDelete({user})
}

module.exports = {
addUser,
getUsers,
getBadgesByAffNumber,
getByAffNumber,
getNeasByAffNumber,
getNecsByAffNumber,
getPointsByAffNumber,
addNeaAndBadgeToUser,
addNecAndBadgeToUser,
editNickAndOccupation,
changeToInactive,
deleteUser,
}
