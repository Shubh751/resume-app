import React, { Component } from 'react';
import '../css/EditImage.css';

export default class EditImage extends Component{
  constructor(){
    super();
    this.state={
      file:null
    }
  }
  edit = async(e)=>{
    e.preventDefault();
    const image = this.state.file;
    const formData = new FormData();
    formData.append('studentImage',image);
    formData.append('student_id',localStorage.getItem('id'));
    await this.props.editImageData(formData);
    await this.props.showImageData();
  }

  onChange =(e) => {
    this.setState({file:e.target.files[0]});
  }

  render(){
    return(
      <div className="EditImage form-group">
        <form onSubmit={this.edit}>
          <input
            className="my-3 mx-2"
            id="choose_image"
            type="file"
            onChange= {this.onChange}>
          </input>
          <input
            className="btn btn-success"
            type="submit">
          </input>
        </form>
      </div>
    );
  }
}