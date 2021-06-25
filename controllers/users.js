const User = require('../models/User')

const addUser = async(req, res) => {
    const user = await new User({
        name: req.body.name,
        email: req.body.email
    })
    user.save()
    res.json('success added user')
}

module.exports = addUser