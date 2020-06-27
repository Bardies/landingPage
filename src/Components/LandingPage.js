import React, { Component } from "react";
import Navbar from "./landingComponents/Navbar";
import About from "./landingComponents/About";
import Services from "./landingComponents/Services";
import Footer from "./landingComponents/Footer";
import ContactUs from "./landingComponents/ContactUs";
import TeamMember from "./landingComponents/TeamMember";
import Masthead from "./landingComponents/Masthead";
class LandingPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Masthead />
        <Services />
        <About />

        {/*<!-- Team-->*/}
        <section className="page-section bg-light" id="team">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                Our Amazing Team
              </h2>
            </div>
            <div className="row">
              <TeamMember
                memberName="Rokaia Magdy"
                memberJob="Leader"
                colClass="4"
                memberImg="1"
              />
              <TeamMember
                memberName="Mahmoud Esmail"
                memberJob="Leader"
                colClass="4"
                memberImg="2"
              />
              <TeamMember
                memberName="Esraa Hamouda"
                memberJob="Leader"
                colClass="4"
                memberImg="1"
              />
            </div>

            <div className="row">
              <TeamMember
                memberName="Youssef Mohamed"
                memberJob="Leader"
                colClass="6"
                memberImg="2"
              />

              <TeamMember
                memberName="Bardis Maher"
                memberJob="Leader"
                colClass="6"
                memberImg="1"
              />
            </div>
          </div>
        </section>

        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
