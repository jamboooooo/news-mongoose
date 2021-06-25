const { Router } = require('express')
const { addUser } = require('../controllers/index')
const router = Router()

router.post('/user', addUser)

module.exports = router