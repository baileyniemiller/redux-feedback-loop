import React from 'react';
import {connect} from 'react-redux';
import { HashRouter as Route, Link } from "react-router-dom";
import Header from "../Header/Header.js";
import { withRouter } from "react-router";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import "./Feeling.css"
import FeelingHeader from "./FeelingHeader.js";

// Feelings component 

// setting state to null - it will eventually be an number
class Feeling extends React.Component {
  state = {
    feeling: null,
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
    this.props.history.push("/understanding"); //path to next page
  };
  componentWillUnmount() {
    this.props.dispatch({ type: "ADD_FEELING", payload: this.state.feeling }); //sends to Redux state
  }

  // in the render function, there is the input where
  // the user can type 1-6.
  // On click of the "next" button then runs a dispatch to the feeling
  // reducer sending the new state (whatever the user typed)
  // as the payload.
  render() {
    return (
      <Paper elevation={3} className="feelPaper">
      <Route path="/feeling">
        <div>
          <FeelingHeader />
          <div>
            <form onSubmit={this.submitInfo} className="feelingBody">
              <InputLabel id="feelingLabel">Feeling?</InputLabel>
              <Select
                required
                labelId="feelingSelectLabel"
                id="demo-simple-select-required"
                value={this.state.feeling}
                onChange={(event) => this.handleChange("feeling", event)}
              >
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={1}>1</MenuItem>
              </Select>
              <FormHelperText id="helperText">Required</FormHelperText>
              <Button variant="contained" color="primary" type="submit" className="feelNext">
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
    feelingReducer: state.feelingReducer
  };
};

export default withRouter(connect(mapStateToProps)(Feeling));