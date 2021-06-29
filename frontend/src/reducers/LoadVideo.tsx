import {FETCH_VIDEO_DETAIL, SAVE_VIDEO_DETAIL,Video}  from '../actions/types'

interface VideoListProps {
    results: Video[];
    loading: Boolean;
    videoUrl: String;
}

const initState= {
    results: [],
    loading: false,
    videoUrl: "",
}

const VideoReducer = (state=initState, action:any) => {
    switch (action.type) {
        case FETCH_VIDEO_DETAIL:
            console.log(action.payload)
            return {
                ...state,
                loading: false,
                results: state.results.concat(action.payload)
            }
        case SAVE_VIDEO_DETAIL:
            return{
                ...state, 
                videoUrl: action.payload
                
            }
            
        default:
            return state;
    }
}

export default VideoReducer;