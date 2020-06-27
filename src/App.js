import React, { Component } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Privacy from "./Components/Privacy";
import TermsOfUse from "./Components/TermsOfUse";
import LandingPage from "./Components/LandingPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/terms" component={TermsOfUse} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
