const New = require('../models/New')
const Comment = require('../models/Comment')

const getAllNews = async(req, res) => {
    const news = await New.find()
    res.render('home', {
        newsItem: news
    })
}

const getNewById = async(req, res) => {
    const comments = await Comment.find({ newId: req.params.id })
        .populate('userId').lean();
    const news = await New.findById(req.params.id).lean()
    console.log(comments);
    res.render('single-news', {
        news,
        comments
    })
}

const getNewsByCAtegory = async(req, res) => {
    const news = await New.find({ categoryId: req.params.id }).lean()
    console.log(news);
    res.render('cat-news', { news })
}

const addNews = async(req, res) => {
    const news = await new New({
        title: req.body.title,
        text: req.body.text,
        img: req.body.img,
        categoryId: req.params.id
    })
    news.save()
    res.json('success added news')
}

const deleteNews = async(req, res) => {
    const news = await New.findById(req.params.id)
    news.delete()
    res.json('success deleted news')
}

const changeNews = async(req, res) => {
    const news = await New.findOneAndUpdate({ _id: req.params.id }, {...req, body })
    news.save()
    res.json('success changed news')
}

module.exports = {
    getNewById,
    getNewsByCAtegory,
    addNews,
    deleteNews,
    changeNews,
    getAllNews
}