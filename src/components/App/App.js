import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Header from '../Header/Header.js';
import Feeling from '../Feeling/Feeling.js';
import Understanding from "../Understanding/Understanding.js";
import Support from "../Support/Support.js";
import Comments from "../Comments/Comments.js";
import Review from "../Review/Review.js";

class App extends Component {

  feedbackInfo = () => {
    const { feelingReducer, understandingReducer, supportReducer, commentsReducer, dispatch } = this.props;
    // you want state to be perfect here -- ready to go
    // make a copy of state
    const newFeedback = {
      ...this.state, 
      feeling: feelingReducer, 
      understanding: understandingReducer,
      support: supportReducer,
      comments: commentsReducer
    };
    // we need the feedback (from props)
    console.log(newFeedback);
    axios
      .post("/feedback", newFeedback)
      .then((res) => {
        console.log(res);
        dispatch({ type: "ADD_FEEDBACK", payload: newFeedback });
        // redirect the user to the review page
        this.props.history.push("/review");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

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
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    feelingReducer: state.feelingReducer,
    understandingReducer: state.understandingReducer,
    supportReducer: state.supportReducer,
    commentsReducer: state.commentsReducer
  };
};

export default connect(mapStateToProps)(App);
