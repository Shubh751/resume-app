import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/Home.css';
import Profile from './Profile';
import Logout from './Logout';
import ProjectDetails from '../container/ProjectDetails';
import Education from './Education';
import  Certificate  from './Certificate';


export default class Home extends Component{
  constructor(){
    super();

  this.state={
    child:null
  }
  };
  renderChild = () =>{
    this.setState({ child:<Profile/> })
  }
  reset = () =>{
    this.setState({ child:null })
  }
  logout =() =>{
    this.setState({ child:<Logout/> })
  }

  explainSubmit = (event) =>{
    event.preventDefault();
    alert("submitted");
  }

  projectDetails = (event) =>{
    event.preventDefault();
    this.setState({ child:<ProjectDetails/> })
  }

  educationDetails = (event) =>{
    event.preventDefault();
    this.setState({ child:<Education/> })
  }

  certificateDetails = (event) =>{
    event.preventDefault();
    this.setState({ child:<Certificate/> })
  }

  render(){
    return(
      <div className="Home">
        <div className="App">
          <div className="container-fluid">
            <div className="row row1">
              <div className="col-2">
                <h5 className="my-3">Resume Application</h5>
              </div>
              <div className="col-1">
                  <Link className="Link btn my-2" to='/home' onClick={this.reset}><b>Home</b></Link>
              </div>
              <div className="col-1">
                  <button className="Link btn my-2" onClick={this.renderChild}><b>Profile</b></button>
              </div>
              <div className="col-1">
                  <Link className="Link btn my-2" to='/logout' onClick={this.logout}><b>Logout</b></Link>
              </div>
              <div className="col-9">

              </div>
            </div>
            <div className="row row2">
              <div className="col-2 col1">
                <div className="row">

                </div>
                <div className="row">

                </div>
                <div className="row">

                </div>
              </div>
              <div className="col-8 col2">
                {this.state.child}
              </div>
              <div className="col-2 col3">
                <div className="row row1">
                  <form onSubmit={this.explainSubmit}>
                    <div className="form-group my-2">
                      <label htmlFor="explain">Explain Your Self:</label>
                      <textarea 
                        className="form-control" 
                        rows="3" 
                        id="explain">
                      </textarea>
                      <input
                        className="btn btn-info"
                        type="submit"
                        value="Save">
                      </input>
                    </div>
                  </form>
                </div>
                <hr></hr>
                <div className="row row2">
                  <button 
                    className="Link btn" 
                    onClick={this.projectDetails}>
                    Project Details
                  </button>
                  <button 
                    className="Link btn" 
                    onClick={this.educationDetails}>
                    Education
                  </button>
                  <button 
                    className="Link btn"
                    onClick={this.certificateDetails}>
                    Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}