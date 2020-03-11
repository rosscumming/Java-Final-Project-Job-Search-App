import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Register.css'

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
      initial_salary: 0,
      salary_weight: 5,
      location: ""
    }
    this.handleNewUser = this.handleNewUser.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSalaryChange = this.handleSalaryChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
  }

  handleNewUser(event){
    const newUser = {
      name: this.state.name,
      salary: this.state.salary,
      initial_salary: this.state.salary,
      salary_weight: this.state.salary_weight,
      location: this.state.location
    }
    this.props.onUserSubmit(newUser)
  }

  handleNameChange(event){
    this.setState({ name: event.target.value})
  }

  handleSalaryChange(event) {
    this.setState({ salary: event.target.value})
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value})
  }

  render () {
    return(

      <article>
      <h1>Registration Page</h1>
      <h3>Create a new JobSwipe profile here;</h3>

      <form>
      <input type="text"
      placeholder="Your Name"
      value={this.state.name}
      onChange={this.handleNameChange}/>

      <input type="text"
      placeholder="Expected Salary"
      value={this.state.salary}
      onChange={this.handleSalaryChange} />

      <input type="text"
      placeholder="Location"
      value={this.state.location}
      onChange={this.handleLocationChange} />

      <Link to="/jobs" onClick={this.handleNewUser}>
      <button type="submit">Submit</button>
      </Link>
      </form>

      </article>
    )


  }











}

export default Register;
