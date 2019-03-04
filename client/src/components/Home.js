import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/Home.css';
import ProjectDetails from '../container/ProjectDetails';
import Education from '../container/Education';
import  Certificate  from '../container/Certificate';
import Explain from '../container/Explain';
import EditImage from '../container/EditImage';
import AddImage from '../container/AddImage';
import image from '../image/user.jpg';

export default class Home extends Component{
  constructor(){
    super();
      this.state={
        child:null,
      }
  };

  editImage = (event) =>{
    event.preventDefault();
    console.log("in edit image")
    this.setState({ child:<EditImage/> })
  }

  addImage = (event) =>{
    event.preventDefault();
    console.log("in add image")
    this.setState({ child:<AddImage/> })
  }

  componentDidMount(){
    this.props.showImageData();
  }

  logout =() =>{
    localStorage.clear();
    this.props.history.push("/");
  }

  render(){
    console.log("home data.....",this.props.data)
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
                <div className="row row1">
                  {
                    <div>
                      <h4 className="mx-3 my-2">
                        <i>Welcome {localStorage.getItem('name')}</i>
                      </h4>
                      <div className="col-4 col1 mx-2 my-3">
                        {
                          (this.props.data)?
                          (
                            <div>
                              <img
                                data-toggle="modal" data-target="#editImage"
                                onClick={this.editImage}
                                src={this.props.data}
                                className="rounded-circle"
                                alt=""
                                width="200"
                                height="200">
                              </img>
										          <div className="modal fade" id="editImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  					          	<div className="modal-dialog modal-dialog-centered"  id="editImage" role="document" >
				    				          		<div className="modal-content">
				      			          			<div className="modal-header">
				        		          				<div className="modal-title" id="exampleModalLabel"><b>Edit Image</b></div>
				        		          					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          	          						<span aria-hidden="true">&times;</span>
				        		          					</button>
				      			          				</div>
				      			          				<div className="modal-body">
				        		          					{this.state.child}
										          				</div>
				      			          				<div className="modal-footer">
				        		          					<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>				      			        				</div>
				    				          			</div>
				  					          		</div>
										          </div>
                            </div>
                          ):
                          (
                            <div>
                              <img
                                data-toggle="modal" data-target="#addImage"
                                onClick={this.addImage}
                                src={image}
                                className="rounded-circle"
                                alt=""
                                width="200"
                                height="200">
                              </img>
										          <div className="modal fade" id="addImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  					          	<div className="modal-dialog modal-dialog-centered"  id="editImage" role="document" >
				    				          		<div className="modal-content">
				      			          			<div className="modal-header">
				        		          				<div className="modal-title" id="exampleModalLabel"><b>Choose Image</b></div>
				        		          					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          	          						<span aria-hidden="true">&times;</span>
				        		          					</button>
				      			          				</div>
				      			          				<div className="modal-body">
				        		          					{this.state.child}
										          				</div>
				      			          				<div className="modal-footer">
				        		          					<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>				      			        				</div>
				    				          			</div>
				  					          		</div>
										          </div>
                            </div>
                          )
                        }
                        
                      </div>
                    </div>
                  }
                </div>
                <div className="row row2">

                </div>
                <div className="row row3">

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