import React, { Component } from "react";
import Home from "./Home";
import Register from "./Register";
import UserList from "./UserList";
import NavBar from "./NavBar";
import UserLikes from "./UserLikes"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component {

render() {

return(
  <Router>
    <React.Fragment>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/users" component={UserList} />
          <Route path="/likes" component={UserLikes} />
        </Switch>
    </React.Fragment>
  </Router>

)

}





}

export default Main;
