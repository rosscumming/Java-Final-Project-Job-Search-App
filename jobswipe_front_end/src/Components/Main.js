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
      jobs:[],
      selectedUserId: 1
    }
    this.setUserId = this.setUserId.bind(this);
  }

  setUserId(id) {
    this.setState({ selectedUserId: id });
  }

  componentDidMount(){

    fetch("http://localhost:8080/users")
    .then(res => res.json())
    .then(data => data['_embedded'])
    .then(users => this.setState({users: users.users}))

    fetch("http://localhost:3001/jobs")
    .then(res => res.json())
    .then(jobs => this.setState({jobs: jobs}))

  }

  render() {

    return(

      <Router>
      <React.Fragment>
      <NavBar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/users" render={() => <UserList onUserSelected={this.setUserId} users={this.state.users} />} />
      <Route exact path="/likes" component={UserLikes} />
      <Route exact path="/jobs" render={() => <JobPage selectedUserId={this.state.selectedUserId} jobs={this.state.jobs} />} />
      </Switch>
      </React.Fragment>
      </Router>

    )

  }

}

export default Main;
