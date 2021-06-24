
const config = require('../config.js');
const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');
const itemTemplate = require('../models/itemModel');
const axios = require('axios');


router.post('/postVideo', (request, response) => {
    let title;
    let thumbnailsUrl;
    let durationString;
    let videoUrl = "SQqSMDIzhaE"  // hard-coding for the test purpose
    axios.get("https://www.googleapis.com/youtube/v3/videos?id=TE66McLMMEw&key=AIzaSyAKW_Et6SVMxjggnpG_OLzZiuE71TUZRvw&part=snippet,contentDetails")
        .then(res => {
            for(const i in res.data.items){
                const item = res.data.items[i];
                title = item.snippet.title;
                thumbnailsUrl = item.snippet.thumbnails.default.url;
                durationString = item.contentDetails.duration;
                videoUrl = "https://www.youtube.com/watch?=v" + videoUrl
            }
            const signedUpUser = new signUpTemplateCopy({
                VideoTitle: title,
                VideoLength: durationString,
                WebURL: videoUrl,
                ThumbnailURL:thumbnailsUrl,
                isFavourite: false})
            signedUpUser.save()
            .then(data => {
                response.json(data)
                console.log("passed")
                console.log(config.APIKey);
            })
            .catch(error => {
                response.json(error);
            })
            

        });
    
}) 

router.get('/getVideo', (request, response) => {    
    signUpTemplateCopy.find({}, function(err, data) {
        if (err) throw err;
    
        response.send(data);
      })
    });

    


module.exports = router