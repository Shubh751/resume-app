import React, { Component } from 'react';

export default class AddEducation extends Component
{
	constructor(){
		super();
		this.state={
			qualification:'',
			start_date:'',
			end_date:'',
			location:'',
			institute_name:'',
			added:''
		}
	}
	handleChange = (event) =>{
		this.setState({ [event.target.name]: event.target.value })
	}

	add = async(event) => {
		event.preventDefault();
		const data={
			qualification:this.state.qualification,
			start_date:this.state.start_date,
			end_date:this.state.end_date,
			location:this.state.location,
			institute_name:this.state.institute_name
		}
		await this.props.addEducationData(data);
		this.setState({ added:"Details Added" })
		const student_id= await localStorage.getItem('id');
		await this.props.showEducationData(student_id);
	}

  render(){
      return(
				<div className="AddEducation">
        	<div className="container my-5">
						<form onSubmit={this.add}>
							<div className="form-group">
								<div className="row row1 my-3">
									<div className="col-4 col1">
										<label>Qualification name : </label>
										<input
											className="form-control"
											type="text"
											name="qualification"
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
								<div className="row row2 my-3">
									<div className="col-4 col1">
										<label>Location :</label>
										<input
											className="form-control"
											name="location"
											type="text"
											onChange={this.handleChange}>
										</input>
									</div>
									<div className="col-4 col2">
									<label>Institute Name : </label>
										<input
											className="form-control"
											name="institute_name"
											type="text"
											onChange={this.handleChange}>
										</input>
									</div>
								</div>
								<div className="row row3">
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