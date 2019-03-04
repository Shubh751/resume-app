import React, { Component } from 'react';
import '../css/EditImage.css';

export default class AddImage extends Component{
  constructor(){
    super();
    this.state={
      file:null
    }
  }
  add = async(e) => {
    e.preventDefault();
    const image = this.state.file;
    const formData = new FormData();
    formData.append('studentImage',image);
    formData.append('student_id',localStorage.getItem('id'));
    this.props.addImageData(formData);
    await this.props.showImageData();
  }

  onChange =(e) => {
    this.setState({file:e.target.files[0]});
  }

  render(){
    return(
      <div className="EditImage form-group">
        <form onSubmit={this.add}>
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