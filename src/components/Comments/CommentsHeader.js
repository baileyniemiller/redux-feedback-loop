import React, { Component } from "react";
import "./Comments.css";

// Header component

class CommentsHeader extends Component {
  render() {
    return (
      <header className="mainHeader">
        <h1 className="title">:)</h1>
        <h4 className="description">
          If you'd like, feel free to leave any questions or comments.
        </h4>
      </header>
    );
  }
}

export default CommentsHeader;
