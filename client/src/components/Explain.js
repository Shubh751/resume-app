import React, { Component } from 'react';
import '../css/Explain.css';

export default class Explain extends Component{
	constructor(){
    super();
      this.state={
        explain:'',
        explain_id:'',
        flag:'',
      }
	};
  
  componentWillMount(){
    const student_id = localStorage.getItem('id');
    this.props.showExplainData(student_id);
  }

  componentWillReceiveProps(nextProps){
    try
    {
      if(this.props.data !== nextProps.data)
      {
        this.setState({ 
          explain:nextProps.data[0].explain,
          explain_id:nextProps.data[0]._id
        })
      }
    }
    catch(TypeError)
    {
      console.log(TypeError)
    }
  }
  
	handleChange = (event) =>{
    this.setState({ [event.target.name]:event.target.value })
  }

  save = (event) =>{
    event.preventDefault();
    const student_id=localStorage.getItem('id');
		const data={
      explain:this.state.explain,
      student_id:student_id
    }
    this.props.saveExplainData(data);
    this.setState({ flag:'saved' });
    this.props.showExplainData(student_id);
  }

  edit = (event) =>{
    event.preventDefault();
    const explain=this.state.explain;
    const explain_id=this.state.explain_id;
    this.props.editExplainData(explain,explain_id);
    this.setState({ flag:'Edited' });
  }

  render(){
    return(
      <div className="Explain container my-3 mt-4">
        {
          (this.props.data.length===0)?
          (
            <form onSubmit={this.save}>
              <div className="form-group my-4">
                <div className="row row1">
                  <label htmlFor="explain">
                    <h4>Explain Your Self : </h4>
                  </label>
                    <textarea
                      className="form-control textarea"
                      rows="3"
                      cols="50"
                      name="explain"
                      onChange={this.handleChange}>
                    </textarea>
                </div>
                <div className="row row2">
                  <input
                    className="btn btn-success"
                    type="submit"
                    value="Save">
                  </input>
                  <p>{this.state.flag}</p>
                </div>
              </div>
             </form>
          ):
          (
            <div className="row row3 my-4">
              <h4>Explain Your Self : </h4>
              <textarea
                className="form-control textarea"
                rows="3"
                cols="50"
                name="explain"
                onChange={this.handleChange}
                value={this.state.explain}>
              </textarea>
              <button 
                type="button"
                className="btn btn-primary"
                onClick={this.edit}>
                Edit
              </button>
              <p className="mx-3 my-2">{ this.state.flag }</p>
            </div>
          )    
        }             
      </div>
    );
  }
}