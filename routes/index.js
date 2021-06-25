const { Router } = require('express')
const router = Router()

router.use(require('./users.routes'))
router.use(require('./categories.routes'))
router.use(require('./news.routes'))
router.use(require('./comments.routes'))

module.exports = router