import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.js';
import { Link } from "react-router-dom";
import '../css/SignUp.css';
import PropTypes from "prop-types"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"

const API_KEY = ""

class SignUp extends Component
{
  constructor()
  {
    super();
    this.state={
      email:'',
      password:'',
      name:'',
      phone:'',
      search: "",
      value: "",
    }
  	this.submit=this.submit.bind(this);
    this.login=this.login.bind(this);
    this.handleChange=this.handleChange.bind(this);
    }

    handleInputChange(e) {
      this.setState({search: e.target.value, value: e.target.value})
    }

    handleSelectSuggest(suggest) {
      console.log(suggest)
      this.setState({search: "", value: suggest.formatted_address})
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
        phone:this.state.phone,
        location:this.state.value,
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
      const style={
        styles:{
          border:'none',
          backgroundColor:'#EAECEE',
          borderBottom: '1px solid rgb(255, 164, 164)',
          textAlign:'center',
        },
        stylesDiv:{
          
        }
      }
      const {search, value} = this.state
      return(
        <div className="Signup">
          <div className="container">
            <h3><b><i>Sign-Up</i></b></h3>
            <form onSubmit={this.submit} className="form-group">
              <div className="row">
               <input
                className="mx-5 my-3 form-control"
                type="text"
                placeholder="Enter Name" 
                name="name" 
                onChange={this.handleChange}
                required>
               </input>
              </div>
              <div className="row">
                <input
                  className="mx-5 my-3 form-control"
              	  type="text"
              	  placeholder="Enter Email" 
              	  name="email" 
              	  onChange={this.handleChange}
                  required>
                </input>
              </div>
              <div className="row">
                <input
                  className="mx-5 my-3 form-control"
              	  type="text"
              	  placeholder="Enter Phone" 
              	  name="phone"
              	  onChange={this.handleChange}
                  required>
                </input>
              </div>
              <div className="row">
                <ReactGoogleMapLoader
        		  		params={{
        		  		  key: API_KEY,
        		  		  libraries: "places,geocode",
        		  		}}
        		  		render={googleMaps =>
        	    			googleMaps && (
        	    			  <div style={style.stylesDiv} className="mx-5 my-3">
        	    			    <ReactGooglePlacesSuggest
        	    			      autocompletionRequest={{input: search}}
        	    			      googleMaps={googleMaps}
        	    			      onSelectSuggest={this.handleSelectSuggest.bind(this)}
        	    			    >
        	    			      <input
                            style={style.styles}
                            className="form-control"
                            required
        	    			        type="text"
        	    			        value={value}
        	    			        placeholder="Search a location"
        	    			        onChange={this.handleInputChange.bind(this)}
        	    			      />
        	    			    </ReactGooglePlacesSuggest>
        	    			  </div>
        	    			)
      			  		}
      			  	/>  
              </div>
              <div className="row">
                <input
                  className="mx-5 my-3 form-control"
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

SignUp.propTypes = {
  googleMaps: PropTypes.object,
}

export default SignUp;