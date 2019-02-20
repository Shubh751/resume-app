import React, { Component } from 'react';
import '../css/ProjectDetails.css';

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
			flag:false
		}
		this.edit = this.edit.bind(this);
	};

	handleChange = (event) =>{
		event.preventDefault();
		this.setState({ [event.target.name]: event.target.value })
	}

	save = (event) =>{
		event.preventDefault();
		const data={
			title:this.state.title,
			start_date:this.state.start_date,
			end_date:this.state.end_date,
			member1:this.state.member1,
			member2:this.state.member2,
			member3:this.state.member3,
			description:this.state.description,
			location:this.state.location,
			company_name:this.state.company_name
		}
		console.log("state...",data)
		this.props.saveData(data);
		const id = localStorage.getItem('id');
		this.props.showData(id);
	}

	componentDidMount(){
		const id = localStorage.getItem('id');
		this.props.showData(id);
	}

	edit =(event)=>{
		// event.preventDefault();
		// this.props.editProjectData(id)
		console.log("in edit")
	}

  render(){
    return(
      <div className="ProjectDetails">
				<div className="container container1 my-3">
					<h4>Project Details</h4>
					{
						(this.props.data.length===0)?
						(
							<p>Add project</p>
						):
						(this.props.data.map((project,index)=>{
							return(
								<div key={index} className="existing_project">
									<div className="row row1 my-2">
										<div className="col-4 col1">
											<p>Title :</p> 
											<p>{project.title}</p>
										</div>
										<div className="col-4 col2">
											<p>Start Date : </p>
											<p>{project.start_date}</p>
										</div>
										<div className="col-4 col3">
											<p>End Date : </p>
											<p>{project.end_date}</p>
										</div>
									</div><hr color="yellow"></hr>
									<div className="row row2 my-2">
										<div className="col-4 col1">
											<p>Team Members :</p> 
											<p>{project.member1}</p>
										</div>
										<div className="col-4 col2">
											<p>{project.member2}</p>
										</div>
										<div className="col-4 col3">
											<p>{project.member3}</p>
										</div>
									</div><hr color="yellow"></hr>
									<div className="row row3 my-2">
										<div className="col-4 col1">
											<p>Description :</p> 
											<p>{project.description}</p>
										</div>
										<div className="col-4 col2">
											<p>Location :</p>
											<p>{project.location}</p>
										</div>
										<div className="col-4 col3">
											<p>Company : </p>
											<p>{project.company_name}</p>
										</div>
										<div>
											<button 
												className="btn btn-success" 
												onClick={this.edit.bind(this,project._id)}>
												Edit
											</button>
										</div>
									</div>
								</div>
							);
						})
					)}
				</div>
        <div className="container my-5 container2">
					<h6>Enter Project Details</h6>
					<form onSubmit={this.save}>
						<div className="form-group">
							<div className="row row1">
								<div className="col-4 col1">
									<label>Title : </label>
									<input
										className="form-control"
										type="text"
										name="title"
										onChange={this.handleChange}>
									</input>
								</div>
								<div className="col-4 col2">
									<label>Start Date : </label>
									<input
										className="form-control"
										type="date"
										name="start_date"
										onChange={this.handleChange}>
									</input>
								</div>
								<div className="col-4 col3">
									<label>End Date : </label>
									<input
										className="form-control"
										type="date"
										name="end_date"
										onChange={this.handleChange}>
									</input>
								</div>
							</div>
							<div className="row row2">
								<div className="col-4 col1">
									<label>Team Members Name :</label>
									<input
										className="form-control"
										name="member1"
										type="text"
										placeholder="1."
										onChange={this.handleChange}>
									</input>
								</div>
								<div className="col-4 col2">
									<input
										className="form-control"
										name="member2"
										type="text"
										placeholder="2."
										onChange={this.handleChange}>
									</input>
								</div>
								<div className="col-4 col3">
									<input
										className="form-control"
										name="member3"
										type="text"
										placeholder="3."
										onChange={this.handleChange}>
									</input>
								</div>
							</div>
							<div className="row row3">
								<div className="col-4 col1">
									<label htmlFor="description">Description : </label>
									<textarea
										className="form-control"
										id="description"
										name="description"
										onChange={this.handleChange}>
									</textarea>
								</div>
								<div className="col-4 col2">
									<label>Location : </label>
									<input
										className="form-control"
										type="text"
										name="location"
										onChange={this.handleChange}>
									</input>
								</div>
								<div className="col-4 col3">
									<label>Company Name : </label>
									<input
										className="form-control"
										type="text"
										name="company_name"
										onChange={this.handleChange}>
									</input>
								</div>
							</div>
							<div className="row row4">
								<input type="submit" className="btn btn-info mx-3 my-2" value="save"></input>
							</div>
						</div>
					</form>
				</div>
      </div>
    );
  }
}