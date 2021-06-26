import React, {useEffect} from 'react';
import ReactPlayer from 'react-player';
import Header from './component/header/header'
import * as actionCreators from './actions/action'
import {connect} from "react-redux";    

function App(props:any) {

  useEffect(() => {
  },[])

  return (
    <div>
      <Header/>
    </div>
  );
}



export default App;
