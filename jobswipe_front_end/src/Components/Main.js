import React, { Component } from "react";
import Home from "./HomeComponents/Home";
import Register from "./RegisterComponents/Register";
import UserList from "./UserListComponents/UserList";
import NavBar from "./NavBarComponents/NavBar";
import UserLikes from "./UserLikes"
import JobPage from "./JobPageComponents/JobPage"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      users: [],
      jobs:[],
      selectedUser: {},
      isLoading: false
    }
    this.setUser = this.setUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.sortList = this.sortList.bind(this);
    this.sortJobsBySalary = this.sortJobsBySalary.bind(this);
  }

  setUser(id) {
    const userSelected = this.state.users.filter(user => user.id === id)
    this.setState({ selectedUser: userSelected[0] }, () => {
      this.setState({isLoading: false})
    });
    console.log("called setState for userSelected")
  }

  sortList() {

    const newState = this.sortJobsBySalary(this.state.jobs)
    this.setState({jobs: newState})
  }

  addUser(user){
    this.setState({ isLoading: true }, () => {
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
        this.setState({ users:[ ...this.state.users, data]})
        this.setUser(data.id)})
    })

  }

  sortJobsBySalary(jobsList){


    for (let jobIndex = 0; jobIndex < jobsList.length; jobIndex ++){

      if (jobsList[jobIndex].maximumSalary === null ){
        jobsList[jobIndex].maximumSalary = 0
      }

      if (jobsList[jobIndex].minimumSalary === null ){
        jobsList[jobIndex].maximumSalary = 0
      }

      let averageJobSalary = (jobsList[jobIndex].maximumSalary - jobsList[jobIndex].minimumSalary)/2
      let userSalary = this.state.selectedUser.salary

      let differential =  averageJobSalary - userSalary
      differential = Math.abs(differential)

      jobsList[jobIndex]['differential'] = differential;


    }

    const sortedJobsList = jobsList.sort(function(job1, job2){return job1.differential - job2.differential})
    return sortedJobsList
  }

  componentDidUpdate(prevProps, prevState){
    console.log(Object.entries(this.state.selectedUser))
    if ((prevState.jobs !== this.state.jobs || prevState.selectedUser !== this.state.selectedUser) && (Object.entries(this.state.selectedUser).length !== 0 )){
      // fetch("http://localhost:8080/users")
      // .then(res => res.json())
      // .then(data => data['_embedded'])
      console.log("hello")
      this.sortList()
    }
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
    console.log(`hit render id is: ${this.state.selectedUser.id}`)
    console.log(this.state.isLoading)
    if (this.state.isLoading) return null

    return(

      <Router>
      <React.Fragment>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" render={() => <Register onUserSubmit={this.addUser}/> } />
      <Route exact path="/users" render={() => <UserList onUserSelected={this.setUser} users={this.state.users} />} />
      <Route exact path="/likes" render={() => {
        return this.state.selectedUser.id
          ? <UserLikes jobs={this.state.jobs} onUserSelected={this.setUser} selectedUserId={this.state.selectedUser.id}/>
          : <Redirect to="/"/>
      }}/>
      <Route exact path="/jobs" render={() => {
        return this.state.selectedUser.id
        ? <JobPage selectedUserId={this.state.selectedUser.id} jobs={this.state.jobs} />
        :  <Redirect to="/"/>
      }}/>
      </Switch>
      <footer className="main-footer">&copy; 2020 5GUYS</footer>

      </React.Fragment>

      </Router>

    )

  }

}

export default Main;
