const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    },
    newId: {
        ref: 'New',
        type: mongoose.Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('Comment', commentSchema)