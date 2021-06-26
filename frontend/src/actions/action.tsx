import axios from 'axios';
import {FETCH_VIDEO_DETAIL,SAVE_VIDEO_DETAIL} from './types';
import {getVideoAPI, PostVideoAPI} from '../resource/api';

export const fetchVideoDetails = () => {
    return (dispatch: any) => {
        return axios(getVideoAPI).then(result => { dispatch(fetchVideoData(result)); }).catch(function (error) {
        })
    }

}

export const SaveVideData = (VideoUrl:String) => {
    

    return (dispatch: any) => {
        console.log("save data")
        return axios.post(PostVideoAPI, {url:VideoUrl}).then(result => {
            console.log(result);
        
        }).catch(function(error){
            console.log(error);
        })
    }
}

function fetchVideoData(data: any) {
    console.log(data)
    return {
        type: FETCH_VIDEO_DETAIL,
        payload: data.data.results
    };
}

function SaveVideoData(){
    return { 
        type: SAVE_VIDEO_DETAIL,
    }
}

