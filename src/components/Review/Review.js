import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from 'axios';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ReviewHeader from "./ReviewHeader.js";

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
      <Paper elevation={3} className="feelPaper">
        <Route path="/review">
          <div className="reviewBody">
            <ReviewHeader />
            <div className="feedbackDisplay">
              <TableContainer component={Paper} id="table">
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Feelings</TableCell>
                      <TableCell align="center">Understanding</TableCell>
                      <TableCell align="center">Support</TableCell>
                      <TableCell align="center">Comments</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">{feelingReducer}</TableCell>
                      <TableCell align="center">{understandingReducer}</TableCell>
                      <TableCell align="center">{supportReducer}</TableCell>
                      <TableCell align="center">{commentsReducer}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <Link to="/thank-you">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                id="submitButton"
                onClick={() => {
                  this.feedbackInfo();
                }}
              >
                Submit
              </Button>
            </Link>
          </div>
        </Route>
        </Paper>
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