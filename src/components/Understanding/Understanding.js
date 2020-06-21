import React from "react";
import { connect } from "react-redux";
import { HashRouter as Route, Link } from "react-router-dom";
import Header from "../Header/Header.js";
import { withRouter } from "react-router-dom";

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


  // in the render function, there is the input where
  // the user can type 1-6.
  // On click of the "next" button then runs a dispatch to the understanding
  // reducer sending the new state (whatever the user typed)
  // as the payload.
  render() {
    return (
      <Route path="/understanding">
        <div>
          <Header />
          <div className="understandingBody">
            <h2>
              On a scale of 1-6, how well are you understanding the content?
            </h2>
            <input
              type="number"
              placeholder="Understanding?"
              className="understandingIn"
              onChange={(event) => this.handleChange("understanding", event)}
            />
            <Link to="/support">
              <button
                onClick={() => {
                  this.props.dispatch({
                    type: "ADD_UNDERSTANDING",
                    payload: this.state.understanding,
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
    understandingReducer: state.understandingReducer,
  };
};

export default connect(mapStateToProps)(withRouter(Understanding));
