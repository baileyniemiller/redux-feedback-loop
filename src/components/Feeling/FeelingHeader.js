import React, { Component } from "react";
import "./Feeling.css";

// Header component

class FeelingHeader extends Component {
  render() {
    return (
      <header className="feelHeader">
        <h1 className="title">1</h1>
        <h4 className="description">
          On a scale of 1-6, how are you feeling today?
        </h4>
      </header>
    );
  }
}

export default FeelingHeader;
