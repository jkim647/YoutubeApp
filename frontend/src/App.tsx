import React, {useEffect,useState} from 'react';
import ReactPlayer from 'react-player';
import Header from './component/header/header'
import {connect, useDispatch} from "react-redux";   
import VideoList from "./component/VideoList/VideoList";
import {fetchVideoDetails} from '../src/actions/action';


function App(props:any) {
  const dispatch = useDispatch();
  const [currentUrl, setCurrentUrl] = useState()
  useEffect(() => {
    dispatch(fetchVideoDetails())
    setCurrentUrl(props.updatedUrl)
  },[])

  const updateUrl = (url:String) => {
    setCurrentUrl(url);
  }

  return (
    <>
    <div>
      <Header/>
      <div className="container">
        <div className="row">

          <div className="col-7">
            <ReactPlayer
              url={currentUrl}
              width="100%"
              height="400px"
              playing={true}
            />
            <div>{props.updatedUrl}</div>
          </div>

          <div className="col-5">
              <VideoList setUrl = {updateUrl}/>
          </div>
        </div>

        

      </div>
    </div>
    </>
  );
}





const mapStateToProps = state => ({
    updatedUrl: state.videoData.videoUrl
})



export default connect(mapStateToProps,null)(App);
