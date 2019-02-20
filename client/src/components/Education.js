import React, { Component } from 'react';
// import '../css/.css';

export default class Education extends Component{
  render(){
    return(
      <div className="Education">
        <div className="container my-5">
					<h6>Enter Qualification Details</h6>
					<form>
						<div className="form-group">
							<div className="row row1 my-3">
								<div className="col-4 col1">
									<label>Qualification name : </label>
									<input
										className="form-control"
										type="text"
										name="q-name">
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
									<label>Location :</label>
									<input
										className="form-control"
										name="location"
										type="text">
									</input>
								</div>
								<div className="col-4 col2">
								<label>Institute Name : </label>
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