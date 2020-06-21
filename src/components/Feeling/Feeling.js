import React from 'react';
import {connect} from 'react-redux';
import { HashRouter as Route, Link } from "react-router-dom";
import Header from "../Header/Header.js";
import { withRouter } from "react-router-dom";

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


  // in the render function, there is the input where
  // the user can type 1-6.
  // On click of the "next" button then runs a dispatch to the feeling
  // reducer sending the new state (whatever the user typed)
  // as the payload.

  render() {
    return (
      <Route path="/feeling">
        <div>
          <Header />
          <div className="feelingBody">
            <h2>On a scale of 1-6, how are you feeling today?</h2>
            <input
              type="number"
              placeholder="Feeling?"
              className="feelingIn"
              onChange={(event) => this.handleChange("feeling", event)}
            />
            <Link to="/understanding">
              <button
                onClick={() => {
                  this.props.dispatch({
                    type: "ADD_FEELING",
                    payload: this.state.feeling,
                  });
                }}
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </Route>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    feelingReducer: state.feelingReducer
  };
};

export default connect(mapStateToProps)(withRouter(Feeling));