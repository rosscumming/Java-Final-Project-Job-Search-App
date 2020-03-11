import React, { Component } from "react";
import Home from "./HomeComponents/Home";
import Register from "./RegisterComponents/Register";
import UserList from "./UserListComponents/UserList";
import NavBar from "./NavBarComponents/NavBar";
import UserLikes from "./UserLikes"
import JobPage from "./JobPageComponents/JobPage"
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
    this.sortJobsBySalary = this.sortJobsBySalary.bind(this);
  }

  setUser(id) {
    const userSelected = this.state.users.filter(user => user.id === id)
    this.setState({ selectedUser: userSelected[0] });
    this.sortJobsBySalary(this.state.jobs)
  }

  addUser(user){
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
    .then(res => res.json())
    .then(data => {
      this.setState({ users:[ ...this.state.users, data] })
      this.setUser(data.id)})
  }

  sortJobsBySalary(jobsList){
    const sortedJobsList = jobsList.sort((job1, job2) => job2.maximumSalary - job1.maximumSalary);
  }

  componentDidMount(){

    fetch("http://localhost:8080/users")
    .then(res => res.json())
    .then(data => data['_embedded'])
    .then(users => this.setState({users: users.users}))

    fetch("http://localhost:3001/jobs")
    .then(res => res.json())
    .then(jobs => {
      this.setState({jobs: jobs})})
  }

  render() {

    return(

      <Router>
      <React.Fragment>
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
