import React from 'react';
// import '../css/EditCertificate.css';

export default class EditCertificate extends React.Component {
	constructor(){
		super();
		this.state={
			title:'',
			start_date:'',
			end_date:'',
			institute_name:'',
		}
	}

	componentDidMount(){
		this.setState({
			title:this.props.data[0].title,
			start_date:this.props.data[0].start_date,
			end_date:this.props.data[0].end_date,
			institute_name:this.props.data[0].institute_name,
		});
	}

	handleChange = (event) =>{
		this.setState({ [event.target.name]: event.target.value })
	}

	edit = async(event) => {
		event.preventDefault();
		const certificate_id=this.props.certificate_id;
		const data={
			title:this.state.title,
			start_date:this.state.start_date,
			end_date:this.state.end_date,
			institute_name:this.state.institute_name
		}
		await this.props.editCertificateData(certificate_id,data);
		await this.props.showCertificateData();
	}
  render() {
    return (
      <div className="EditCertificate">
				<form onSubmit={this.edit}>
						<div className="form-group">
							<div className="row row1">
								<div className="col-4 col1">
									<label>Certificate Title : </label>
										<input
											className="form-control"
											type="text"
											name="title"
											value={this.state.title}
											onChange={this.handleChange}>
										</input>
								</div>
								<div className="col-4 col2">
									<label>Start Date : </label>
									<input
										className="form-control"
										type="date"
										name="start_date"
										value={this.state.start_date}
										onChange={this.handleChange}>
									</input>
								</div>
								<div className="col-4 col3">
									<label>End Date : </label>
									<input
										className="form-control"
										type="date"
										name="end_date"
										value={this.state.end_date}
										onChange={this.handleChange}>
									</input>
								</div>
							</div>
							<div className="row row2">
								<div className="col-4 col1">
									<label>Institute :</label>
									<input
										className="form-control"
										name="institute_name"
										type="text"
										value={this.state.institute_name}
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
