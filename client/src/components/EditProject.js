import React from 'react';

export default class EditProject extends React.Component {
  render() {
    return (
      <div className="EditProject">
				<h4>
					Enter Details
				</h4>
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
    );
  }
}
