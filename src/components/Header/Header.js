import React, { Component } from "react";
import "./Header.css"

// Header component

class Header extends Component {
  render() {
    return (
      <header className="mainHeader">
        <h1 className="title">Hello!</h1>
        <h4 className="description">Please follow the steps and submit your feedback.</h4>
      </header>
    );
  }
}

export default Header;