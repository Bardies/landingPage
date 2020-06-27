import React, { Component } from "react";
class Services extends Component {
  render() {
    return (
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            {/* <h3 className="section-subheading text-muted"></h3> */}
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Payment</h4>
              <p className="text-muted">
                Our packages suits both large and small organizations.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Filter Toxic Comments</h4>
              <p className="text-muted">
                We can filter all toxic, obscene, identity-hate posts and
                comments.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Web Security</h4>
              <p className="text-muted">
                All your data that we have in our website is secured.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
