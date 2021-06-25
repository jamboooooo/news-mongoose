const {
    getAllCategory,
    getCategoryById,
    addCategory,
    deleteCategory,
    changeCategory
} = require('./categories')

const {
    getCommentByNews,
    addCommentInNews,
    deleteComment,
    changeComment
} = require('./comments')

const {
    getNewById,
    getNewsByCAtegory,
    addNews,
    deleteNews,
    changeNews,
    getAllNews
} = require('./news')

const addUser = require('./users')

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