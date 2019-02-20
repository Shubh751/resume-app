import React, { Component } from 'react';
// import '../css/ProjectDetails.css';

export default class Certificate extends Component{
  render(){
    return(
      <div className="Certificate">
        <div className="container my-5">
					<h6>Enter Certificate Details</h6>
					<form>
						<div className="form-group">
							<div className="row row1 my-3">
								<div className="col-4 col1">
									<label>Title : </label>
									<input
										className="form-control"
										type="text"
										name="title">
									</input>
								</div>
								<div className="col-4 col2">
									<label>Start Date : </label>
									<input
										className="form-control"
										type="date"
										name="start-date">
									</input>
								</div>
								<div className="col-4 col3">
									<label>End Date : </label>
									<input
										className="form-control"
										type="date"
										name="end-date">
									</input>
								</div>
							</div>
							<div className="row row2 my-3">
								<div className="col-4 col1">
									<label>Institute Name :</label>
									<input
										className="form-control"
										name="institute"
										type="text">
									</input>
								</div>
							</div>
							<div className="row row3">
								<input type="submit" className="btn btn-info mx-3 my-2" value="save"></input>
							</div>
						</div>
					</form>
				</div>
      </div>
    );
  }
} 