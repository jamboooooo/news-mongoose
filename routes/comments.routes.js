const { Router } = require('express')
const router = Router()
const {
    getCommentByNews,
    addCommentInNews,
    deleteComment,
    changeComment
} = require('../controllers/index')


router.get('/news/:id/comments', getCommentByNews)
router.post('/news/:id/comment', addCommentInNews)
router.patch('/comment/:id', changeComment)
router.delete('/comment/:id', deleteComment)

module.exports = router