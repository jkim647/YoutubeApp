const mongoose = require('mongoose')

const VideoTemplate = new mongoose.Schema({
    VideoTitle:{
        type: String,
        required:true
    },
    VideoLength:{
        type:String,
        require: true
    },
    WebURL:{
        type:String,
        required:false
    },
    ThumbnailURL:{
        type:String,
        required: true
    },
    isFavourite:{
        type: Boolean,
        required: false
    },
    transcripts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "items"
        }
    ]

})

module.exports = mongoose.model('mytable',VideoTemplate)
