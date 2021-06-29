import React, { useEffect,useState } from 'react';
import {IconButton} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AddCircle from '@material-ui/icons/AddCircle';
import * as actionCreators from '../../actions/action'
import {connect,useDispatch} from "react-redux";    
import {fetchVideoDetails} from '../../actions/action';


const Header = (props) => {
    const [url, getUrl] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("url changed")
        dispatch(fetchVideoDetails())
    }, [props.test])

    return(
        <div className= "header">
            <div className="container">
                <div className="row">
                    <div className="col-2 justify-content-center align-self-center">
                        <h1><span className="heading">Clone</span>Tube</h1>
                    </div>
                    <div className="col-10 d-flex justify-content-end search-bar">
                        <TextField 
                        value = {url}
                        id="standard-basic" 
                        variant="outlined"
                        onChange = { (event: any ) => getUrl(event.target.value)}
                        placeholder="add video url"
                        style ={{width: '30%', backgroundColor:'#EAEAEA', borderColor: 'white' }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <IconButton onClick = {() => props.SaveVideoData(url)}>
                                    <AddCircle/>
                                </IconButton>

                            </InputAdornment>
                        }}
                        
                         />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        SaveVideoData: (url) => dispatch(actionCreators.SaveVideData(url)),
    }
  };

const mapStateToProps = state => ({
    videoList: state.videoData.results,
    test: state.videoData.videoUrl
})


export default connect(mapStateToProps,mapDispatchToProps)(Header);

