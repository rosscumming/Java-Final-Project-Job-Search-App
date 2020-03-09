import React, { Component } from "react";
import Home from "./Home";
import Register from "./Register";
import UserList from "./UserList";
import NavBar from "./NavBar";
import UserLikes from "./UserLikes"
import JobPage from "./JobPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      users: [],
      jobs:[]
    }
  }


  componentDidMount(){

    fetch("http://localhost:8080/users")
    .then(res => res.json())
    .then(data => data['_embedded'])
    .then(users => this.setState({users: users.users}))
  }

  render() {

    return(
      <Router>
      <React.Fragment>
      <NavBar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/users" render={() => <UserList users={this.state.users} />} />
      <Route path="/likes" component={UserLikes} />
      <Route path="http://localhost:3001/jobs" component={JobPage} />
      </Switch>
      </React.Fragment>
      </Router>

    )

  }

}

export default Main;
