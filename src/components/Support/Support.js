import React from "react";
import { connect } from "react-redux";
import { HashRouter as Route, Link } from "react-router-dom";
import Header from "../Header/Header.js";
import { withRouter } from "react-router-dom";

class Support extends React.Component {
  state = {
    support: '',
  };

  handleChange = (propertyName, event) => {
    this.setState({
      [propertyName]: Number(event.target.value),
    });
  };

  render() {
    return (
      <Route path="/support">
        <div>
          <Header />
          <div className="supportBody">
            <h2>On a scale of 1-6, how well are you being supported?</h2>
            <input
              type="number"
              value={this.state.support}
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
    supportReducer: state.supportReducer,
  };
};

export default connect(mapStateToProps)(withRouter(Support));
