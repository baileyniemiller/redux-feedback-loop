import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const feelingReducer = (state = [], action) => {
  let newState = [...state];
  if (action.type === "ADD_FEELING") {
    newState = [action.payload];
  }
  return newState;
};

const understandingReducer = (state = [], action) => {
  let newState = [...state];
  if (action.type === "ADD_UNDERSTANDING") {
    newState = [...action.payload];
  }
  return newState;
};

const supportReducer = (state = [], action) => {
  let newState = [...state];
  if (action.type === "ADD_SUPPORT") {
    newState = [...action.payload];
  }
  return newState;
};

const commentsReducer = (state = [], action) => {
  let newState = [...state];
  if (action.type === "ADD_COMMENTS") {
    newState = [...action.payload];
  }
  return newState;
};

const feedbackReducer = (state = [], action) => {
  let newState = [...state];
  if (action.type === "ADD_FEEDBACK") {
    newState = [...action.payload];
  }
  return newState;
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentsReducer,
    feedbackReducer
  }),
  // redux devtools (browser extension): could also do redux logger here
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
