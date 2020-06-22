import React from "react";
import { connect } from "react-redux";
import { HashRouter as Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./ThankYou.css"

const ThankYou = () => {
  return (
    <Route>
      <div>
        <header className="thanksHeader">
          <h1>Thank you for submitting your feedback!</h1>
          <Link exact to="/">
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className="thanksButton"
            >Leave New Feedback</Button>
          </Link>
        </header>
      </div>
    </Route>
  );
}

export default connect()(withRouter(ThankYou));