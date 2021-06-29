import React, {useEffect, useState} from 'react';
import Close from '@material-ui/icons/Close'
import Star from '@material-ui/icons/Star'
import StarBorder from '@material-ui/icons/StarBorder'
import {fetchVideoDetails} from '../../actions/action'
import {connect} from "react-redux"; 
import {Video} from '../../actions/types'

interface VideoListProps {
    videoList: Video[];
}

const VideoList = (props) => {
    const [videoList, updateVideoList] = useState([])

    const playVideo = (url:String) => {
        props.setUrl(url)
    }

    useEffect(() =>{
        const output = [];
        console.log("fetch video")
        if(props.videoList.length >0){
            props.videoList.forEach((video) => { 

                const row =(
                <tr >
                    <td className="align-middle">Test</td>
                    <td className="align-middle" onClick={() => playVideo(video.WebURL)}><img src={video.ThumbnailURL} width="100px" alt="Thumbnail"/></td>
                    <td className="align-middle"><b>{video.VideoTitle}</b></td>
                    <td className="align-middle video-list-close"><button><Close/></button></td>
                </tr>)
                output.push(row)
            })
            updateVideoList(output);

        }
        
        
        
      },[props.videoList,props.url]);

    return(
        <div className="video-list">
            <h1 className="play-heading"><span className="red-heading">play</span>video</h1>
                <table className="table">
                    {videoList}
                </table>
        </div>
    )
}

const mapStateToProps = state => ({
    videoList: state.videoData.results,
    url: state.videoData.videoUrl
})




export default connect(mapStateToProps)(VideoList);