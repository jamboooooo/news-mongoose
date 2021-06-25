const Comment = require('../models/Comment')

const getCommentByNews = async(req, res) => {
    const comments = await Comment.find({ newId: req.params.id })
    res.json(comments)
}

const addCommentInNews = async(req, res) => {
    const comment = await new Comment({
        text: req.body.text,
        userId: req.body.userId,
        newId: req.params.id
    })
    comment.save()
    res.redirect(`/news/${req.params.id}`)
    res.json('success added comment')
}

const deleteComment = async(req, res) => {
    const comment = await Comment.findById(req.params.id)
    comment.delete()
    res.json('success deleted')
}

const changeComment = async(req, res) => {
    const comment = await Comment.findById(req.params.id)
    comment.text = req.body.text
}

module.exports = {
    getCommentByNews,
    addCommentInNews,
    deleteComment,
    changeComment
}