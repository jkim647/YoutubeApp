
const config = require('../config.js');
const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels.js');
const itemTemplate = require('../models/itemModel.js');
const axios = require('../../frontend/node_modules/axios');


router.post('/postVideo', (req, res,next) => {
    let title;
    let thumbnailsUrl;
    let durationString;
    const videoUrl = req.body.url; // hard-coding for the test purpose
    console.log("test" + videoUrl)
    const indexOfFirstId = videoUrl.indexOf("=")+1;
    const videoId = videoUrl.substring(indexOfFirstId)
    console.log(videoId)
    axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyAKW_Et6SVMxjggnpG_OLzZiuE71TUZRvw&part=snippet,contentDetails`)
        .then(res => {
            for(const i in res.data.items){
                const item = res.data.items[i];
                title = item.snippet.title;
                thumbnailsUrl = item.snippet.thumbnails.default.url;
                durationString = item.contentDetails.duration;
                videoUrl
            }
            const signedUpUser = new signUpTemplateCopy({
                VideoTitle: title,
                VideoLength: durationString,
                WebURL: videoUrl,
                ThumbnailURL:thumbnailsUrl,
                isFavourite: false})
            signedUpUser.save()
            
            

        }).then(data => {
            res.json(data);
            console.log("passed")
        })
        .catch(error => {
            res.json(error);
        })
    
}) 

router.get('/getVideo', (request, response) => {    
    signUpTemplateCopy.find({}, function(err, data) {
        if (err) throw err;
        console.log("send Video")
        response.send(data);
      })
    });

    


module.exports = router