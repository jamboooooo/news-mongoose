const {
    getAllCategory,
    getCategoryById,
    addCategory,
    deleteCategory,
    changeCategory
} = require('./categories.controllers')

const {
    getCommentByNews,
    addCommentInNews,
    deleteComment,
    changeComment
} = require('./comments.controllers')

const {
    getNewById,
    getNewsByCAtegory,
    addNews,
    deleteNews,
    changeNews,
    getAllNews
} = require('./news.controllers')

const addUser = require('./users.controllers')

module.exports = {
    getAllCategory,
    getCategoryById,
    addCategory,
    deleteCategory,
    changeCategory,
    getCommentByNews,
    addCommentInNews,
    deleteComment,
    changeComment,
    getNewById,
    getNewsByCAtegory,
    addNews,
    deleteNews,
    changeNews,
    addUser,
    getAllNews
}