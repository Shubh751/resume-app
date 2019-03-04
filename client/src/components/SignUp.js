import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.js';
import { Link } from "react-router-dom";
import '../css/SignUp.css';
class SignUp extends Component
{
  constructor()
  {
    super();
    this.state={
      email:'',
      password:'',
      name:'',
      phone:''
    }
  	this.submit=this.submit.bind(this);
    this.login=this.login.bind(this);
    this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e)
    {
      this.setState({ [e.target.name]:e.target.value })
    }

    submit(e)
    {
      e.preventDefault();
      const data={
				name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        phone:this.state.phone
      }
      this.props.signup(data);
    }

    login(e)
    {
      e.preventDefault();
      ReactDOM.render(
        <Login/>, 
      	document.getElementById('root')
      );
    }

    render()
    {
      return(
        <div className="Signup">
          <div className="container">
            <h3><b><i>Sign-Up</i></b></h3>
              <form onSubmit={this.submit} className="form-group">
              <div className="row">
               <input
                className="mx-5 my-3"
                type="text"
                placeholder="Enter Name" 
                name="name" 
                onChange={this.handleChange}
                required>
               </input>
              </div>
              <div className="row">
            	  <input
                  className="mx-5 my-3"
              	  type="text"
              	  placeholder="Enter Email" 
              	  name="email" 
              	  onChange={this.handleChange}
                  required>
            	  </input>
              </div>
              <div className="row">
            	  <input
                  className="mx-5 my-3"
              	  type="number"
              	  placeholder="Enter Phone" 
              	  name="phone"
              	  onChange={this.handleChange}
                  required>
            	  </input>
              </div>
              <div className="row">
                <input
                  className="mx-5 my-3"
                  type="password"
                  placeholder="Enter password" 
                  name="password"
                  onChange={this.handleChange}
                  required>
                </input>
              </div>
              <div className="row">
                <button className="mx-5 my-3 btn btn-info" type="submit">SignUp</button>
                <Link className="mx-1 my-3 btn btn-success"  to="/">Login</Link>
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;