import React from "react";
import { connect } from "react-redux";
import { HashRouter as Route, Link } from "react-router-dom";
import CommentsHeader from "./CommentsHeader.js";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

// Comments component

// setting local state to ane empty string
class Comments extends React.Component {
  state = {
    comments: "",
  };

  // start HandleChange - this fires when the "next" button
  // is clicked. We are setting state to the input value
  // --> whatever the user types.
  handleChange = (propertyName, event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }; // end handleChange

  submitInfo = (event) => {
    //prevents default action
    event.preventDefault();
    this.props.history.push("/review"); //path to next page
  };
  componentWillUnmount() {
    this.props.dispatch({ type: "ADD_COMMENTS", payload: this.state.comments }); //sends to Redux state
  }

  // in the render function, there is the text area where
  // the user can add a comment.
  // On click of the "next" button then runs a dispatch to the comments
  // reducer sending the new state (whatever the user commented)
  // as the payload.

  render() {
    return (
      <Paper elevation={3} className="commentPaper">
        <Route path="/comments">
          <div>
            <CommentsHeader />
            <div className="commentBody">
              <form onSubmit={this.submitInfo}>
                <TextField
                  className="commentField"
                  id="outlined-required"
                  label="Comments?"
                  variant="outlined"
                  onChange={(event) => this.handleChange("comments", event)}
                />
                <Button variant="contained" color="primary" type="submit" id="commentButton">
                  Next
                </Button>
              </form>
            </div>
          </div>
        </Route>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    commentsReducer: state.commentsReducer,
  };
};

export default connect(mapStateToProps)(withRouter(Comments));