const { Router } = require('express')
const router = Router()
const {
    getNewById,
    getNewsByCAtegory,
    addNews,
    deleteNews,
    changeNews,
} = require('../controllers/index')

router.get('/news/:id', getNewById)
router.get('/category/:id/news', getNewsByCAtegory)
router.post('/category/:id/news', addNews)
router.delete('news/:id', deleteNews)
router.patch('news/:id', changeNews)

module.exports = router