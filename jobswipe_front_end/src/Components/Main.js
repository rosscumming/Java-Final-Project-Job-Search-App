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
      selectedUser: {}
    }
    this.setUser = this.setUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  setUser(id) {
    const userSelected = this.state.users.filter(user => user.id === id)
    this.setState({ selectedUser: userSelected[0] });
  }

  addUser(user){
    const newState = [...this.state.users, user]
    this.setState({ users: newState})
    fetch("http://localhost:8080/users", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: user.name,
        salary: user.salary,
        initial_salary: user.salary,
        salary_weight: user.salary_weight,
        location: user.location
      })
    })
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
      <h1>Hi I'm {this.state.selectedUser.name}</h1>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" render={() => <Register onUserSubmit={this.addUser}/> } />
      <Route exact path="/users" render={() => <UserList onUserSelected={this.setUser} users={this.state.users} />} />
      <Route exact path="/likes" render={() => <UserLikes selectedUserId={this.state.selectedUser.id}/>} />
      <Route exact path="/jobs" render={() => <JobPage selectedUserId={this.state.selectedUser.id} jobs={this.state.jobs} />} />
      </Switch>
      </React.Fragment>
      </Router>

    )

  }

}

export default Main;
