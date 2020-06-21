import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from 'axios';

// Review component

class Review extends Component {

  // start feedbackInfo --> on click of the "submit" button
  feedbackInfo = () => {
    // bringing in each reducer so we can just refer to the name later
    const { feelingReducer, understandingReducer, supportReducer, commentsReducer, dispatch } = this.props;
    // making a copy of state
    // creating a variable newFeedback that contains an object
    // with each key representing the user's feedback
    // being stored in the corresponding reducer.
    // we will use this in the payload.
    const newFeedback = {
      ...this.state, 
      feeling: feelingReducer, 
      understanding: understandingReducer,
      support: supportReducer,
      comments: commentsReducer
    };
    console.log(newFeedback);
    // POST to /feedback
    axios.post("/feedback", newFeedback)
      .then((res) => {
        console.log(res);
        // dispatching so all of the info can be saved to the database
        dispatch({ type: "ADD_FEEDBACK", payload: newFeedback });
        console.log('Success in posting feedback.');
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      }); // end POST
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