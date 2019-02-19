import React, { Component } from 'react';

export default class Logout extends Component{
  constructor(){
		super();
		this.log_out=this.log_out.bind(this);
	}
	log_out(){
		localStorage.clear();
		console.log(localStorage.getItem('token'))
		this.props.history.push("/")
	}
  render(){
    return(
      <div>
				<button onClick={this.log_out}>Logout</button>
      </div>
    );
  }
}