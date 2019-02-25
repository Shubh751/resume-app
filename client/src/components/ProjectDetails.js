import React, { Component } from 'react';
import '../css/ProjectDetails.css';
import EditProject from '../container/EditProject';
import AddProject from '../container/AddProject';

export default class ProjectDetails extends Component{
	constructor(){
		super();
		this.state={
			title:'',
			start_date:'',
			end_date:'',
			member1:'',
			member2:'',
			member3:'',
			description:'',
			location:'',
			company_name:'',
			flag:false,
			child:'',
			editProject:''
		}
	};
	
	componentDidMount(){
		console.log("in componentdidmount of projectdetails");
		const student_id = localStorage.getItem('id');
		this.props.showProjectData(student_id);
	}

  render(){
		const style={
			styles:{
				width:'100%'
			}
		}
		console.log(this.props.data)
    return(
      <div className="ProjectDetails">
				<div className="container-fluid container1 my-3">
					<h4>Project Details</h4>
					{
						(this.props.data.length===0)?
						(
							<p>Add a project</p>
						):
						(this.props.data.length && this.props.data.map((project,index)=>{
							return(
								<div key={index} className="container-fluid project_details my-3">
									<div className="row row1">
										<div className="col-4 col1">
											<b>Title :</b>
											<p>{project.title}</p>
										</div>
										<div className="col-4 col2">
											<b>Start Date : </b>
											<p>{project.start_date}</p>
										</div>
										<div className="col-4 col3">
											<b>End Date : </b>
											<p>{project.end_date}</p>
										</div>
									</div>
									<hr color="yellow"></hr>
									<div className="row row2 my-2">
										<div className="col-4 col1">
											<b>Team Members :</b> 
											<p>{project.member1}</p>
										</div>
										<div className="col-4 col2">
											<p>{project.member2}</p>
										</div>
										<div className="col-4 col3">
											<p>{project.member3}</p>
										</div>
									</div>
									<hr color="yellow"></hr>
									<div className="row row3 my-2">
										<div className="col-4 col1">
											<b>Description :</b> 
											<p>{project.description}</p>
										</div>
										<div className="col-4 col2">
											<b>Location :</b>
											<p>{project.location}</p>
										</div>
										<div className="col-4 col3">
											<b>Company : </b>
											<p>{project.company_name}</p>
										</div>
									</div>
									<div className="row row4">
										{/* Dialog for Add Project */}
										<button type="button" className="btn btn-primary " data-toggle="modal" data-target="#editProject">
  										Edit
										</button>
										<div className="modal fade" id="editProject" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  						<div className="modal-dialog modal-dialog-centered" role="document" >
				    						<div className="modal-content"  style={style.styles}>
				      						<div className="modal-header">
				        						<div className="modal-title" id="exampleModalLabel">Enter Details</div>
				        							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          							<span aria-hidden="true">&times;</span>
				        							</button>
				      							</div>
				      							<div className="modal-body">
				        							<EditProject id={project._id}/>
														</div>
				      							<div className="modal-footer">
				        							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				        							<button type="button" className="btn btn-primary">Save changes</button>
				      							</div>
				    							</div>
				  							</div>
										</div>
									</div>
								</div>
							);
						})
					)
					}
				</div>
				{/* Dialog for Add Project */}
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addProject">
  				Add Project
				</button>
				<div className="modal fade" id="addProject" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <div className="modal-title" id="exampleModalLabel">Modal title</div>
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div className="modal-body">
				        <AddProject/>
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				        <button type="button" className="btn btn-primary">Save changes</button>
				      </div>
				    </div>
				  </div>
				</div>
      </div>
    );
  }
}

