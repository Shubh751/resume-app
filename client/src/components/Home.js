import React, { Component } from 'react';
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
        phone:null,
        email:null,
        location:null
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

  editPhone = (event) =>{
    event.preventDefault();
    const phone = this.state.phone;
    this.props.editPhoneData(phone);
  }

  editEmail = (event) =>{
    event.preventDefault();
    const email = this.state.email;
    this.props.editEmailData(email);
  }

  editLocation = (event) =>{
    event.preventDefault();
    const location = this.state.location;
    this.props.editLocationData(location);
  }

  handleChnage = (event) =>{
    this.setState({ [event.target.name]: event.target.value });
  }

  componentDidMount(){
    this.props.showImageData();
    this.setState({ 
      phone:localStorage.getItem('phone'),
      email:localStorage.getItem('email'),
      location:localStorage.getItem('location')
    });
  }

  logout =() =>{
    localStorage.clear();
    this.props.history.push("/");
  }

  render(){
    return(
      <div className="Home">
        <div className="container-fluid">
          <div className="row row1">
            <div className="col-11 col1">
              <h5 className="my-3">Resume Application</h5>
            </div>
            {/* <div className="col-1">
                <Link className="Link btn my-2" to='/home' onClick={this.reset}><b>Home</b></Link>
            </div>
            <div className="col-1">
                <button className="Link btn my-2" onClick={this.renderChild}><b>Profile</b></button>
            </div> */}
            <div className="col-1 col2">
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
                        (this.props.Image)?
                        (
                          <div>
                            <img
                              data-toggle="modal" data-target="#editImage"
                              onClick={this.editImage}
                              src={this.props.Image}
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
				      		          					<button onClick={()=>{ this.props.showImageData(); }} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>				      			        				</div>
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
				      		          					<button onClick={()=>{ this.props.showImageData(); }} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>				      			        				</div>
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
              <div className="row row2 my-3">
                {/* Phone number */}
                {
                  <div>
                    <form onSubmit={this.editPhone}>
                      <input
                        className="form-control"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChnage}>
                      </input>
                      <input
                        type="submit"
                        className="my-2"
                        value="Edit Phone">
                      </input>
                    </form>
                  </div>
                }
              </div>
              <div className="row row3 my-3">
                {/* Email */}
                {
                  <div>
                    <form onSubmit={this.editEmail}>
                     <input
                       className="form-control"
                       name="email"
                       value={this.state.email}
                       onChange={this.handleChnage}>
                     </input>
                     <input
                       type="submit"
                       className="my-2"
                       value="Edit Email">
                     </input>
                    </form>
                  </div>
                }
              </div>
              <div className="row row4 my-3">
                {/* Location */}
                {
                  <div>
                    <form onSubmit={this.editLocation}>
                     <input
                       className="form-control"
                       name="location"
                       value={this.state.location}
                       onChange={this.handleChnage}>
                     </input>
                     <input
                       type="submit"
                       className="my-2"
                       value="Edit Location">
                     </input>
                    </form>
                  </div>
                }
              </div>
              <div className="row row5 my-2">
                Skills
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
    );
  }
}