import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from 'axios';

class Review extends Component {

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
    axios.post("/feedback", newFeedback)
      .then((res) => {
        console.log(res);
        dispatch({ type: "ADD_FEEDBACK", payload: newFeedback });
        // redirect the user to the home page
        // this.props.history.push("/review");
        console.log('Success in posting feedback.');
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  render() {
    const {feelingReducer, understandingReducer, supportReducer, commentsReducer} = this.props;
    return (
      <Route path="/review">
        <div className="reviewBody">
          <h2>Confirm Your Feedback</h2>
          <div className="feedbackDisplay">
            <p>Feelings: {feelingReducer}</p>
            <p>Understanding: {understandingReducer}</p>
            <p>Support: {supportReducer}</p>
            <p>Comments: {commentsReducer}</p>
          </div>
           <Link to="/thank-you">
              <button
                onClick={() => {this.feedbackInfo()}}>Submit</button>
            </Link>
        </div>
      </Route>
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

export default connect(mapStateToProps)(Review);