import React from "react";
import { connect } from "react-redux";
import { HashRouter as Route, Link } from "react-router-dom";
import Header from "../Header/Header.js";
import { withRouter } from "react-router-dom";

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


  // in the render function, there is the input where
  // the user can type 1-6.
  // On click of the "next" button then runs a dispatch to the support
  // reducer sending the new state (whatever the user typed)
  // as the payload.

  render() {
    console.log("Understanding: ", this.props.understandingReducer);
    return (
      <Route path="/support">
        <div>
          <Header />
          <div className="supportBody">
            <h2>On a scale of 1-6, how well are you being supported?</h2>
            <input
              type="number"
              placeholder="Support?"
              className="supportIn"
              onChange={(event) => this.handleChange("support", event)}
            />
            <Link to="/comments">
              <button
                onClick={() => {
                  this.props.dispatch({
                    type: "ADD_SUPPORT",
                    payload: this.state.support,
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
    supportReducer: state.supportReducer,
  };
};

export default connect(mapStateToProps)(withRouter(Support));
