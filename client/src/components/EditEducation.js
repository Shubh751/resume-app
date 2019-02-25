import React from 'react';
import '../css/EditProject.css';

export default class EditProject extends React.Component {
	constructor(){
		super();
		this.state={
			qualification:'',
			start_date:'',
			end_date:'',
			location:'',
			institute_name:'',
		}
	}
	handleChange = (event) =>{
		this.setState({ [event.target.name]: event.target.value })
	}

	edit = async(event) => {
		event.preventDefault();
		const education_id=this.props.education_id;
		const data={
			qualification:this.state.qualification,
			start_date:this.state.start_date,
			end_date:this.state.end_date,
			location:this.state.location,
			institute_name:this.state.institute_name
		}
		await this.props.editEducationData(education_id,data);
		const student_id= await localStorage.getItem('id');
		await this.props.showEducationData(student_id);
	}
  render() {
    return (
      <div className="EditEducation">
				<form onSubmit={this.edit}>
						<div className="form-group">
							<div className="row row1">
								<div className="col-4 col1">
									<label>Qualification : </label>
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
							<div className="row row2">
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
									<label>Institute :</label>
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
							</div>
						</div>
					</form>
      </div>
    );
  }
}
