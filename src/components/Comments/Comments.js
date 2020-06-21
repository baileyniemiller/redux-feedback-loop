import React from "react";
import { connect } from "react-redux";
import { HashRouter as Route, Link } from "react-router-dom";
import Header from "../Header/Header.js";
import { withRouter } from "react-router-dom";

// Comments component

// setting local state to ane empty string
class Comments extends React.Component {
  state = {
    comments: '',
  };

// start HandleChange - this fires when the "next" button
// is clicked. We are setting state to the input value
// --> whatever the user types.
  handleChange = (propertyName, event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }; // end handleChange


  // in the render function, there is the text area where
  // the user can add a comment.
  // On click of the "next" button then runs a dispatch to the comments 
  // reducer sending the new state (whatever the user commented)
  // as the payload.

  render() {
    return (
      <Route path="/comments">
        <div>
          <Header />
          <div className="commentsBody">
            <h2>If you'd like, feel free to leave any comments or questions.</h2>
            <textarea
              rows="5"
              cols="50"
              placeholder="Comments?"
              className="commentsIn"
              onChange={(event) => this.handleChange("comments", event)}
            />
            <Link to="/review">
              <button
                onClick={() => {
                  this.props.dispatch({
                    type: "ADD_COMMENTS",
                    payload: this.state.comments,
                  });
                }}>Next</button>
            </Link>
          </div>
        </div>
      </Route>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    commentsReducer: state.commentsReducer,
  };
};

export default connect(mapStateToProps)(withRouter(Comments));