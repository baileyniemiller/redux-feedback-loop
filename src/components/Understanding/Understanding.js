import React from "react";
import { connect } from "react-redux";
import { HashRouter as Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import UnderstandingHeader from "./UnderstandingHeader.js"
import Paper from "@material-ui/core/Paper";

// Understanding component

// setting state to null - will eventually be a number
class Understanding extends React.Component {
  state = {
    understanding: null,
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
    this.props.history.push("/support"); //path to next page
  };
  componentWillUnmount() {
    this.props.dispatch({ type: "ADD_UNDERSTANDING", payload: this.state.understanding }); //sends to Redux state
  }

  // in the render function, there is the input where
  // the user can type 1-6.
  // On click of the "next" button then runs a dispatch to the understanding
  // reducer sending the new state (whatever the user typed)
  // as the payload.
  render() {
    return (
      <Paper elevation={3} className="underPaper">
        <Route path="/understanding">
          <div>
            <UnderstandingHeader />
            <div>
              <form onSubmit={this.submitInfo} className="understandBody">
                <InputLabel id="understandingLabel">Understanding?</InputLabel>
                <Select
                  required
                  labelId="understandingSelectLabel"
                  id="demo-simple-select-required"
                  value={this.state.understanding}
                  onChange={(event) =>
                    this.handleChange("understanding", event)
                  }
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
    understandingReducer: state.understandingReducer,
  };
};

export default connect(mapStateToProps)(withRouter(Understanding));
