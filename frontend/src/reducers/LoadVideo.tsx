import {FETCH_VIDEO_DETAIL, SAVE_VIDEO_DETAIL}  from '../actions/types'

const initState= {
    results: [],
    loading: false,
    videoUrl: ""
}

export default function VideoReducer(state=initState, action:any){
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
                
            }
            
        default:
            return state;
    }
}

