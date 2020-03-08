import React, { Component } from "react";

class Register extends Component {

constructor(props) {
super(props);
this.state = {

  name: "",
  salary: "",
  location: ""

}

}

render () {
  return(

    <article>
    <h1>Registration Page</h1>
    <h3>Create a new profile here</h3>

<form>
<input type="text"
placeholder="Your Name"
value={this.state.name} />
<input type="text"
placeholder="Expected Salary"
value={this.state.salary} />
<input type="text"
placeholder="Location"
value={this.state.location} />

<input type="submit" value="Register" />
</form>
</article>
)


}











}

export default Register;
