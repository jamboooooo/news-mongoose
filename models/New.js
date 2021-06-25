const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    categoryId: {
        ref: 'Category',
        type: mongoose.Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('New', newsSchema)