const { createUser } = require('../../queries/users')

module.exports = async (req, res, next) => {
    const { name, username, email, birthdate, file, enabled } = req.body

    const result = await createUser({ name, username, email, birthdate, profile_image: file, enabled })

    res.status(200).json({
        success: true,
        data: result,
    })
}