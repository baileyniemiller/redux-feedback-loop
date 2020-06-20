import React from "react";
import { connect } from "react-redux";
import { HashRouter as Route, Link } from "react-router-dom";
import Header from "../Header/Header.js";
import { withRouter } from "react-router-dom";

class Understanding extends React.Component {
  state = {
    understanding: '',
  };

  handleChange = (propertyName, event) => {
    this.setState({
      [propertyName]: Number(event.target.value),
    });
  };

  render() {
    return (
      <Route path="/understanding">
        <div>
          <Header />
          <div className="understandingBody">
            <h2>On a scale of 1-6, how well are you understanding the content?</h2>
            <input
              type="number"
              value={this.state.feeling}
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
    understandingReducer: state.understandingReducer,
  };
};

export default connect(mapStateToProps)(withRouter(Understanding));
