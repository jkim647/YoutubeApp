import axios from 'axios';
import {FETCH_VIDEO_DETAIL,SAVE_VIDEO_DETAIL} from './types';
import {getVideoAPI, PostVideoAPI} from '../resource/api';
import {Video} from '../actions/types'


export type VideFetchAction = 
    |{type:'FETCH_VIDEO_DETAIL'; payload: Video}
    |{type:'SAVE_VIDEO_DETAIL'; payload: String}


export const fetchVideoDetails =  () => {
    console.log("save and go fetch again1")
    return async (dispatch: any) => {
        console.log("save and go fetch again2")
        const fetchData = async () => {
            const response = await axios.get(getVideoAPI)
                return response
            } 
            
        try{
            const result = await fetchData()
            dispatch(fetchVideoData(result.data))
            console.log(result)
        } catch (error){
            console.log("??")
        }
            
    }
}

export const SaveVideData = (VideoUrl:String) => {
    

    return (dispatch: any) => {
        return axios.post(PostVideoAPI, {url:VideoUrl}).then(result => {
            dispatch(SaveVideoData(VideoUrl))
            
        }).then(() => {
            console.log("save and go fetch again")
        })
            
        
    }
}

function fetchVideoData(data:Video): VideFetchAction {
    return {
        type: FETCH_VIDEO_DETAIL,
        payload: data
    };
}

function SaveVideoData(data:String):VideFetchAction{
    return { 
        type: SAVE_VIDEO_DETAIL,
        payload: data
    }
}

