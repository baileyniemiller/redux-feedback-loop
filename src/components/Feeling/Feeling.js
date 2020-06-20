import React from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header.js";
import { withRouter } from "react-router-dom";

class Feeling extends React.Component {
  state = {
    feeling: '',
  }

  handleChange = (propertyName, event) => {
    this.setState({
      [propertyName]: Number(event.target.value),
    });
    console.log("This should be the number I typed in: ", this.state);
  }

  render() {
    return (
      <Route path="/feeling">
        <div>
          <Header />
          <div className="feelingBody">
            <h2>On a scale of 1-6, how are you feeling today?</h2>
            <input
              type="number"
              value={this.state.feeling}
              placeholder="Feeling?"
              className="feelingIn"
              onChange={(event) => this.handleChange("feeling", event)}
            />
            <Link to="/understanding"><button
              onClick={() => {
                this.props.dispatch({
                  type: "ADD_FEELING",
                  payload: this.state.feeling,
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
    feelingReducer: state.feelingReducer
  };
};

export default connect(mapStateToProps)(withRouter(Feeling));