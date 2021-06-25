const New = require('../models/New')
const Comment = require('../models/Comment')
const path = require('path')
const { patch } = require('../routes')

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
    const news = await New.findByIdAndDelete(req.params.id)
    res.json('success deleted news')
}

const changeNews = async(req, res) => {
    const news = await New.findOneAndUpdate({ _id: req.params.id }, {...req, body })
    news.save()
    res.json('success changed news')
}

const addImageFromNews = async(req, res) => {
    const news = await New.findById(req.params.id)
    const pathFromPublic = path.resolve(__dirname, '../public')
    if (req.files) {
        let file = req.files.img
        let filename = file.name
        console.log(filename);
        file.mv(path.resolve(pathFromPublic, 'uploads', filename), err => {
            if (err) {
                res.json(err);
            } else {
                news.img = '/uploads/' + filename
                news.save()
                res.json('File uploaded')
            }
        })
    }
}

module.exports = {
    getNewById,
    getNewsByCAtegory,
    addNews,
    deleteNews,
    changeNews,
    getAllNews,
    addImageFromNews
}