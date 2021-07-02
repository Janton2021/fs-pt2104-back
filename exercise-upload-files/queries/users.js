const UserModel = require('../models/Users')

const createUser = async ({ name, username, email, birthdate, profile_image }) => {
    const {
        username: user,
        profile_image: pic } = await UserModel
            .create({ name, username, email, birthdate, profile_image })
    return { name, username, email, birthdate, profile_image: pic }
}


const findUser = async username => {
    return await UserModel.findOne({ username })
}



module.exports = {
    createUser,
    findUser,
}