const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    TranscriptionId: {
        type:Number,
        require: true
    },
    StartTime: {
        type:Number,
        require: true
    },
    Phrase: {
        type: String,
        required: true
    },
    video_id : { type: mongoose.Schema.Types.ObjectId, ref: 'mytable'}
})

module.exports = mongoose.model('items',ItemSchema)