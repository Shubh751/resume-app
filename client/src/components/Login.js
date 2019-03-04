import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/Login.css';

class Login extends Component {
  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      logged_in:false
    }
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  };

  componentWillMount(){
    if(localStorage.getItem('token')){
      return this.setState({logged_in:true})
    }else{
      return this.setState({logged_in:false})
    }
  }

  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
    });
  }

  submit(event){
    event.preventDefault();
    const data={
      email:this.state.email,
      password:this.state.password
    };
    console.log("in login",data)
    const url="/student/login";
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data), 
      headers:{
              'Content-Type': 'application/json'
      }
    }).then((res => res.json()))
    .then(res => { 
      if(res.message==="Authentication succesful")
      {
        return(
          localStorage.setItem('token',res.token),
          localStorage.setItem('id',res.id),
          localStorage.setItem('name',res.name),
          localStorage.setItem('email',res.email),
          localStorage.setItem('phone',res.phone),
          this.setState({logged_in:true}),
          this.props.history.push("/home")
        )
      }
      else
      {
        return alert("email or password is wrong")
      }
    }).catch(error=>console.log("error....",error))
  }

  render()
  {
    if(this.state.logged_in===false)
    {
      return (
        <div className="Login">
          <div className="container">
            <form onSubmit={this.submit}>
              <div className="row row1">
                <h4>Login</h4>
              </div>
              <div className="row row2">
                <input
                  className="mx-5 my-3"                 
                  name="email"
                  type="text"
                  onChange={this.handleChange}
                  required
                  placeholder="Enter Email"
                />
              </div>
              <div className="row row3">
                <input
                  className="mx-5 my-3"
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                  required
                  placeholder="Enter Password"
                />
              </div>
              <div className="row row4">
                <input className="mx-5 my-3 btn btn-info" type="submit" value="Login"></input>
                <Link className="mx-1 my-3 btn btn-success" to="/signup">SignUp</Link>
              </div>
            </form>
          </div>
        </div>
      );
    }
    else{
      return(
        <div>
          {this.props.history.push("/home")}
        </div>
      );
    }
  }
}

export default Login;
