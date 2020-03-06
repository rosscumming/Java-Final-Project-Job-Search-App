import React, { Component } from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component {

render() {

return(
  <Router>
  <React.Fragment>
  <Switch>
          <Route exact path="/" component={Home} />
  </Switch>
  </React.Fragment>
  </Router>

)

}





}

export default Main;
