import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,combineReducers, applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import VideoReducer from './reducers/LoadVideo';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  videoData:VideoReducer
})
export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer,compose(applyMiddleware(thunk)))

const app = (
  <Provider store = {store}>
    <App/>
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
