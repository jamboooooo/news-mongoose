const { Router } = require('express')
const router = Router()
const {
    getAllCategory,
    getCategoryById,
    addCategory,
    deleteCategory,
    changeCategory
} = require('../controllers/index')

router.get('/', getAllCategory)
router.get('/category/:id', getCategoryById)
router.post('/category', addCategory)
router.delete('/category/:id', deleteCategory)
router.patch('/category/:id', changeCategory)

module.exports = router