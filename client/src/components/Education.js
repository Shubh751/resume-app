import React, { Component } from 'react';
import AddEducation from '../container/AddEducation';
import EditEducation from '../container/EditEducation';
import '../css/Education.css';

export default class Education extends Component{
	constructor(props){
		super(props);
		this.state={
			isLoading: false,
			education: [],
			child:''
		}
	};
	
	componentWillMount(){
		console.log("in componentwill-mount of education");
		const student_id=localStorage.getItem('id');
		this.props.showEducationData(student_id);
	}

	componentWillReceiveProps(nextProps){
		if (this.props.data !== nextProps.data) {
			this.setState({ 
				isLoading: true,
				education: nextProps.data
			})
		}
	}

	call = (id) =>{
		this.setState({ child:<EditEducation education_id={id}/> })
	}
	
  render(){
		const style={
			styles:{
				width:'100%'
			}
		}
		console.log("data in education...... ",this.props.data)
    return(
			<div className="Education my-3">
				<div className="container-fluid container1 my-3">
					<h4>Education Details</h4>
					{
						(this.props.data.length===0)?
						(
							<p>Add Educational Details</p>
						):
						(this.state.isLoading && this.props.data.length && this.props.data.map((education,index)=>{
							return(
								<div key={index} className="container-fluid education_details my-3">
									<div className="row row1">
										<div className="col-4 col1">
											<b>Qualification Name :</b>
											<p>{education.qualification}</p>
										</div>
										<div className="col-4 col2">
											<b>Start Date : </b>
											<p>{education.start_date}</p>
										</div>
										<div className="col-4 col3">
											<b>End Date : </b>
											<p>{education.end_date}</p>
										</div>
									</div>
									<hr color="yellow"></hr>
									<div className="row row2 my-2">
										<div className="col-4 col1">
											<b>Location :</b> 
											<p>{education.location}</p>
										</div>
										<div className="col-4 col2">
											<b>Institute Name :</b>
											<p>{education.institute_name}</p>
										</div>
									</div>
									<div className="row row3">
										{/* Dialog for Edit Educational Details */}
										<button onClick={this.call.bind(this,education._id)} type="button" className="btn btn-primary " data-toggle="modal" data-target="#editEducation">
  										Edit
										</button>
										<div className="modal fade" id="editEducation" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  						<div className="modal-dialog modal-dialog-centered" role="document" >
				    						<div className="modal-content"  style={style.styles}>
				      						<div className="modal-header">
				        						<div className="modal-title" id="exampleModalLabel">Enter Details</div>
				        							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          							<span aria-hidden="true">&times;</span>
				        							</button>
				      							</div>
				      							<div className="modal-body">
															{this.state.child}
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
				<button type="button" className="btn btn-success" data-toggle="modal" data-target="#addEducation">
  				Add Education
				</button>
				<div className="modal fade" id="addEducation" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <div className="modal-title" id="exampleModalLabel">Modal title</div>
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div className="modal-body">
				        <AddEducation/>
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				      </div>
				    </div>
				  </div>
				</div>
      </div>
    );
  }
} 