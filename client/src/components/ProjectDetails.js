import React, { Component } from 'react';
import '../css/ProjectDetails.css';
import EditProject from './EditProject';
import AddProject from '../container/AddProject';

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
			flag:false,
			child:'',
			editProject:''
		}
		this.edit = this.edit.bind(this);
	};
	

	componentDidMount(){
		const id = localStorage.getItem('id');
		this.props.showData(id);
	}

	add = () => {
		this.setState({ child:<AddProject demo={this.demo.bind(this)}/>})
	}
	
	demo=()=>{
		this.setState({ child:'' })
	}

	edit =(id)=>{
		console.log("in edit",id)
		this.setState({
      editProject:<EditProject/>
    });
	}

  render(){
    return(
      <div className="ProjectDetails">
				<div className="container-fluid container1 my-3">
					<h4>Project Details</h4>
					{
						(this.props.data.length===0)?
						(
							<p>Add a project</p>
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
									</div>
									<div className="row ro4">
											<button 
												className="btn btn-success mx-2 my-2"
												onClick={this.edit.bind(this,project._id)}>
												Edit
											</button>
									</div>
									<div className="row row5">
										{this.state.editProject}
									</div>
								</div>
							);
						})
					)
					}
				</div>
						<button 
								className="btn btn-success my-2"
								onClick={this.add}
								type="button">
								Add project
							</button>
							{this.state.child}
      </div>
    );
  }
}

