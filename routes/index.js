const { Router } = require('express')
const router = Router()

router.use(require('./users'))
router.use(require('./categories'))
router.use(require('./news'))
router.use(require('./comments'))

module.exports = router