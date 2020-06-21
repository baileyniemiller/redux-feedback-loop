import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Header from '../Header/Header.js';
import Feeling from '../Feeling/Feeling.js';
import Understanding from "../Understanding/Understanding.js";
import Support from "../Support/Support.js";
import Comments from "../Comments/Comments.js";
import Review from "../Review/Review.js";
import ThankYou from "../ThankYou/ThankYou.js";

class App extends Component {

  render() {
    return (
      <Router>
        <Route exact path="/">
          <div className="App">
            <Header />
            <div className="button">
              <Link to="/feeling">
                <button className="startButton">Start</button>
              </Link>
            </div>
            <br />
          </div>
        </Route>
        <Route path="/feeling">
          <Feeling />
        </Route>
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/thank-you">
          <ThankYou />
        </Route>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    feelingReducer: state.feelingReducer,
    understandingReducer: state.understandingReducer,
    supportReducer: state.supportReducer,
    commentsReducer: state.commentsReducer,
    feedbackReducer: state.feedbackReducer
  };
};

export default connect(mapStateToProps)(App);
