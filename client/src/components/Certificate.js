import React, { Component } from 'react';
import AddCertificate from '../container/AddCertificate';
import EditCertificate from '../container/EditCertificate';
import '../css/Certificate.css';

export default class Certificate extends Component{
	constructor(props){
		super(props);
		this.state={
			isLoading: false,
			certificate: [],
			child:''
		}
	};
	
	componentWillMount(){
		console.log("in componentwill-mount of education");
		this.props.showCertificateData();
	}

	componentWillReceiveProps(nextProps){
		if (this.props.data !== nextProps.data) {
			this.setState({ 
				isLoading: true,
				certificate: nextProps.data
			})
		}
	}

	call = (id) =>{
		this.setState({ child:<EditCertificate certificate_id={id}/> })
	}
  render(){
		const style={
			styles:{
				width:'100%'
			}
		}
    return(
			<div className="Certificate my-3">
				<div className="container-fluid container1 my-3">
					<h4>Certificate Details</h4>
					{
						(this.props.data.length===0)?
						(
							<p>Add Certificate Details</p>
						):
						(this.state.isLoading && this.props.data.length && this.props.data.map((certificate,index)=>{
							return(
								<div key={index} className="container-fluid certificate_details my-3">
									<div className="row row1">
										<div className="col-4 col1">
											<b>Certificate Title :</b>
											<p>{certificate.title}</p>
										</div>
										<div className="col-4 col2">
											<b>Start Date : </b>
											<p>{certificate.start_date}</p>
										</div>
										<div className="col-4 col3">
											<b>End Date : </b>
											<p>{certificate.end_date}</p>
										</div>
									</div>
									<hr color="yellow"></hr>
									<div className="row row2 my-2">
										<div className="col-4 col1">
											<b>Institute :</b> 
											<p>{certificate.institute_name}</p>
										</div>
									</div>
									<div className="row row3">
										{/* Dialog for Edit Educational Details */}
										<button onClick={this.call.bind(this,certificate._id)} type="button" className="btn btn-primary " data-toggle="modal" data-target="#editCertificate">
  										Edit
										</button>
										<div className="modal fade" id="editCertificate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  						<div className="modal-dialog modal-dialog-centered" role="document" >
				    						<div className="modal-content"  style={style.styles}>
				      						<div className="modal-header">
				        						<div className="modal-title" id="exampleModalLabel">Enter Details</div>
				        							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          							<span aria-hidden="true">&times;</span>
				        							</button>
				      							</div>
				      							<div className="modal-body">
				        							{this.state.child}
														</div>
				      							<div className="modal-footer">
				        							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				        							<button type="button" className="btn btn-primary">Save changes</button>
				      							</div>
				    							</div>
				  							</div>
										</div>
									</div>
								</div>
							);
						})
						)
					}
				</div>
				{/* Dialog for Add Project */}
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addCertificate">
  				Add Certificate
				</button>
				<div className="modal fade" id="addCertificate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <div className="modal-title" id="exampleModalLabel">Modal title</div>
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div className="modal-body">
				        <AddCertificate/>
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				        <button type="button" className="btn btn-primary">Save changes</button>
				      </div>
				    </div>
				  </div>
				</div>
      </div>
    );
  }
} 