const Category = require('../models/Category')
const New = require('../models/New')

const getAllCategory = async(req, res) => {
    const category = await Category.aggregate([{
        $lookup: {
            from: 'news',
            localField: '_id',
            foreignField: 'categoryId',
            as: 'allNews'
        }
    }])
    res.render('home', {
        categoryItem: category
    })
}

const getCategoryById = async(req, res) => {
    const category = await Category.findById(req.params.id)
    res.json(category)
}

const addCategory = async(req, res) => {
    try {
        const category = await new Category({
            name: req.body.name
        })
        category.save()
        res.json('success added')
    } catch (e) {
        console.log(e.message)
    }

}

const deleteCategory = async(req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        category.delete()
        res.json('success delete')
    } catch (e) {
        console.log(e.message)

    }

}

const changeCategory = async(req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        category.name = req.body.name
        res.json('success changed')
    } catch (e) {
        console.log(e.message)
    }

}

module.exports = {
    getAllCategory,
    getCategoryById,
    addCategory,
    deleteCategory,
    changeCategory
}