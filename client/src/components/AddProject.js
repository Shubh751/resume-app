import React, { Component } from 'react';
import PropTypes from "prop-types"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"
import '../css/AddProject.css';

const API_KEY = "AIzaSyCRm5TQ59RHJtx0ZFLBzznhst76HR4OsSo"

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
			search: "",
			value: "",
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
			location:this.state.value,
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

	handleInputChange(e) {
    this.setState({search: e.target.value, value: e.target.value})
  }

  handleSelectSuggest(suggest) {
    console.log(suggest)
    this.setState({search: "", value: suggest.formatted_address})
  }


  render(){
		const {search, value} = this.state
      return(
				<div className="AddProject">
					<div className="container my-5">
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
										<ReactGoogleMapLoader
        							params={{
        							  key: API_KEY,
        							  libraries: "places,geocode",
        							}}
        							render={googleMaps =>
        	  						googleMaps && (
        	  						  <div>
        	  						    <ReactGooglePlacesSuggest
        	  						      autocompletionRequest={{input: search}}
        	  						      googleMaps={googleMaps}
        	  						      onSelectSuggest={this.handleSelectSuggest.bind(this)}
        	  						    >
        	  						      <input
																className="form-control"
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
				</div>
    	);
		}
	}

	AddProject.propTypes = {
		googleMaps: PropTypes.object,
	}
	