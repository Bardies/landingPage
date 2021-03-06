import React, { Component } from "react";

class Masthead extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To Our Website!</div>
          <div className="masthead-heading text-uppercase">
            It's Nice To Meet You
          </div>
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#services"
          >
            Tell Me More
          </a>
        </div>
      </header>
    );
  }
}

export default Masthead;
