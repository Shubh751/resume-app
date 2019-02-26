import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/Home.css';
import ProjectDetails from '../container/ProjectDetails';
import Education from '../container/Education';
import  Certificate  from './Certificate';
import Explain from '../container/Explain';


export default class Home extends Component{
  constructor(){
    super();
      this.state={
        child:null,
      }
  };
  
  reset = () =>{
    this.setState({ child:null })
  }

  logout =() =>{
    // this.setState({ child:<Logout/> })
    localStorage.clear();
    this.props.history.push("/");
  }

  render(){
    return(
      <div className="Home">
        <div className="App">
          <div className="container-fluid">
            <div className="row row1">
              <div className="col-9">
                <h5 className="my-3">Resume Application</h5>
              </div>
              <div className="col-1">
                  <Link className="Link btn my-2" to='/home' onClick={this.reset}><b>Home</b></Link>
              </div>
              <div className="col-1">
                  <button className="Link btn my-2" onClick={this.renderChild}><b>Profile</b></button>
              </div>
              <div className="col-1">
                  <button className="Link btn my-2" onClick={this.logout}><b>Logout</b></button>
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
              <div className="col-10 col2">
                <div className="row row1">
                  <div className="col-10">
                   <Explain/>
                  </div>
                </div>
                <div className="row row2">
                  <div className="col-10"><ProjectDetails/></div>
                </div>
                <div className="row row3">
                  <div className="col-10"><Education/></div>
                </div>
                <div className="row row4">
                  <div className="col-10"><Certificate/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}