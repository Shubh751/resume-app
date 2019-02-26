import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location' 

const API_KEY = "AIzaSyDBBVy8dGwJhjhWe-3uX0ck1Jcw2t4wWrU"

export default class AddProject extends Component
{
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
			added:'',
			place: null,
		}
	};

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
			company_name:this.state.company_name,
		}
		console.log("state...",data)
		this.props.saveProjectData(data);
		this.setState({ added:"Project Added" })
		const id = localStorage.getItem('id');
		this.props.showProjectData(id);
	}

	handleChange = (event) =>{
		event.preventDefault();
		this.setState({ [event.target.name]: event.target.value })
	}

  render(){
      return(
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
									<GoogleComponent
										name="location"
										className="form-control"
          					apiKey={API_KEY}
          					language={'en'}
          					country={'country:in|country:us'}
          					coordinates={true}
          					// locationBoxStyle={'custom-style'}
          					// locationListStyle={'custom-style-list'}
          					onChange={(e) => { this.setState({ place: e }) }} />
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
								<p className="my-3">{this.state.added}</p>
							</div>
						</div>
					</form>
				</div>
    	);
		}
	}