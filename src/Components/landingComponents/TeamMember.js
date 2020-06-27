import React, { Component } from "react";

class TeamMember extends Component {
  render() {
    return (
      <div className={`col-lg-${this.props.colClass}`}>
        <div className="team-member">
          <img
            className="mx-auto rounded-circle"
            src={`assets/img/team/${this.props.memberImg}.jpg`}
            alt=""
          />
          <h4>{this.props.memberName}</h4>
          <p className="text-muted">{this.props.memberJob}</p>
          <a className="btn btn-dark btn-social mx-2" href="#!">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-dark btn-social mx-2" href="#!">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-dark btn-social mx-2" href="#!">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default TeamMember;
