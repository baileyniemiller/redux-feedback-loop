import React from "react";
import { connect } from "react-redux";
import { HashRouter as Route, Link } from "react-router-dom";
import SupportHeader from "./SupportHeader.js";
import { withRouter } from "react-router";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

// Support component

// setting state to null - will eventually be a number
class Support extends React.Component {
  state = {
    support: null,
  };

  // start HandleChange - this fires when the "next" button
  // is clicked. We are setting state to the input value
  // --> whatever the user types.
  handleChange = (propertyName, event) => {
    this.setState({
      [propertyName]: Number(event.target.value),
    });
  }; // end handleChange

  submitInfo = (event) => {
    //prevents default action
    event.preventDefault();
    this.props.history.push("/comments"); //path to next page
  };
  componentWillUnmount() {
    this.props.dispatch({ type: "ADD_SUPPORT", payload: this.state.support }); //sends to Redux state
  }


  // in the render function, there is the input where
  // the user can type 1-6.
  // On click of the "next" button then runs a dispatch to the support
  // reducer sending the new state (whatever the user typed)
  // as the payload.

  render() {
    return (
      <Paper elevation={3} className="feelPaper">
        <Route path="/support">
          <div>
            <SupportHeader />
            <div className="supportBody">
              <form onSubmit={this.submitInfo}>
                <InputLabel id="supportLabel">Support?</InputLabel>
                <Select
                  required
                  labelId="supportSelectLabel"
                  id="demo-simple-select-required"
                  value={this.state.support}
                  onChange={(event) => this.handleChange("support", event)}
                >
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                </Select>
                <FormHelperText id="helperText">Required</FormHelperText>
                <Button variant="contained" color="primary" type="submit">
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
    supportReducer: state.supportReducer,
  };
};

export default connect(mapStateToProps)(withRouter(Support));
