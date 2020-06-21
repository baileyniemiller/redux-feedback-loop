import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// feelingReducer --> grabs user's feeling 1-6
const feelingReducer = (state = null, action) => {
  let newState = state;
  if (action.type === "ADD_FEELING") {
    newState = action.payload;
  }
  return newState;
};

// understandingReducer --> grabs user's understanding 1-6
const understandingReducer = (state = null, action) => {
  let newState = state;
  if (action.type === "ADD_UNDERSTANDING") {
    newState = action.payload;
  }
  return newState;
};

// supportReducer --> grabs user's support 1-6
const supportReducer = (state = null, action) => {
  let newState = state;
  if (action.type === "ADD_SUPPORT") {
    newState = action.payload;
  }
  return newState;
};
 // commentsReducer --> grabs user's comment/input
const commentsReducer = (state = null, action) => {
  let newState = state;
  if (action.type === "ADD_COMMENTS") {
    newState = action.payload;
  }
  return newState;
};

// feedbackReducer --> takes all four reducers:
// feeling, understanding, support, comments
// and has all info from each one
const feedbackReducer = (state = [], action) => {
  let newState = [...state];
  if (action.type === "ADD_FEEDBACK") {
    newState = [...state, action.payload];
  } else if (action.type === "RESET_FEEDBACK") {
    newState = [];
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
