import React, { Component } from "react";
import "./Understanding.css";

// Header component

class UnderstandingHeader extends Component {
  render() {
    return (
      <header className="mainHeader">
        <h1 className="title">2</h1>
        <h4 className="description">
          On a scale of 1-6, how well are you understanding the content?
        </h4>
      </header>
    );
  }
}

export default UnderstandingHeader;
