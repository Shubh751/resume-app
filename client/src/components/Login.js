import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
        let token=''
        debugger
        return(
          localStorage.setItem('token',res.token),
          localStorage.setItem('name',res.name),
          localStorage.setItem('email',res.email),
          console.log("local storage",token),
          this.setState({logged_in:true}),
          console.log("state",this.state.logged_in),
          // window.location.reload(),
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
        <div className="App">
          <div className="container">
            <form onSubmit={this.submit}>
              <div className="row">
                <h4>Login</h4>
              </div>
              <div className="row">
                Email : 
                <input 
                  name="email"
                  type="text"
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                Password : 
                <input
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                <input type="submit"></input>
                <button><Link to="/signup">SignUp</Link></button>
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
