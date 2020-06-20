import React from "react";
import { connect } from "react-redux";
import { HashRouter as Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const ThankYou = () => {
  return(
    <Route>
    <div>
      <h1>Thank you for submitting your feedback!</h1>
      <Link to="/"><button>Leave New Feedback</button></Link>
    </div>
    </Route>
  )
}

export default connect()(withRouter(ThankYou));