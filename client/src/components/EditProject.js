import React from 'react';
import '../css/EditProject.css';

export default class EditProject extends React.Component {
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
		}
	}

	componentDidMount(){
		this.setState({ 
			title:this.props.data[0].title,
			start_date:this.props.data[0].start_date,
			end_date:this.props.data[0].end_date,
			member1:this.props.data[0].member1,
			member2:this.props.data[0].member2,
			member3:this.props.data[0].member3,
			description:this.props.data[0].description,
			location:this.props.data[0].location,
			company_name:this.props.data[0].company_name,
		})
	}

	handleChange = (event) =>{
		this.setState({ [event.target.name]: event.target.value })
	}

	edit = async(event) => {
		event.preventDefault();
		const project_id=this.props.id;
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
		await this.props.editProjectData(project_id,data);
		const id= await localStorage.getItem('id');
		await this.props.showProjectData(id);
	}
  render() {
    return (
      <div className="EditProject">
				<form onSubmit={this.edit}>
						<div className="form-group">
							<div className="row row1">
								<div className="col-4 col1">
									<label>Title : </label>
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
									<label>Team Members Name :</label>
									<input
										className="form-control"
										name="member1"
										type="text"
										placeholder="1."
										value={this.state.member1}
										onChange={this.handleChange}>
									</input>
								</div>
								<div className="col-4 col2">
									<input
										className="form-control"
										name="member2"
										type="text"
										placeholder="2."
										value={this.state.member2}
										onChange={this.handleChange}>
									</input>
								</div>
								<div className="col-4 col3">
									<input
										className="form-control"
										name="member3"
										type="text"
										placeholder="3."
										value={this.state.member3}
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
										value={this.state.description}
										onChange={this.handleChange}>
									</textarea>
								</div>
								<div className="col-4 col2">
									<label>Location : </label>
									<input
										className="form-control"
										type="text"
										name="location"
										value={this.state.location}
										onChange={this.handleChange}>
									</input>
								</div>
								<div className="col-4 col3">
									<label>Company Name : </label>
									<input
										className="form-control"
										type="text"
										name="company_name"
										value={this.state.company_name}
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
