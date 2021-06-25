const { Router } = require('express')
const router = Router()
const {
    getNewById,
    getNewsByCAtegory,
    addNews,
    deleteNews,
    changeNews,
    addImageFromNews
} = require('../controllers/index')

router.get('/news/:id', getNewById)
router.get('/category/:id/news', getNewsByCAtegory)
router.post('/category/:id/news', addNews)
router.post('/news/:id/img', addImageFromNews)
router.delete('news/:id', deleteNews)
router.patch('news/:id', changeNews)

module.exports = router