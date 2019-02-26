import React, { Component } from 'react';

export default class Explain extends Component{
	constructor(){
    super();
      this.state={
        explain:'',
        explain_id:'',
        flag:'',
      }
	};
  
  // componentDidMount(){
  //   const student_id = localStorage.getItem('id');
  //   this.props.showExplainData(student_id);
  // }

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
    this.setState({ flag:'saved' })
  }

  edit = (event) =>{
    event.preventDefault();
    const explain=this.state.explain;
    const explain_id=this.state.explain_id;
    this.props.editExplainData(explain,explain_id);
    this.setState({ flag:'Edited' })
    alert(this.state.explain,explain_id)
  }

  render(){
    console.log("explain",JSON.stringify(this.props.data))
    return(
      <div className="Explain container">
        {
          (this.props.data.length===0)?
          (
            <form onSubmit={this.save}>
              <div className="form-group my-4">
                <div className="row row1">
                  <label htmlFor="explain">
                    <h4>Explain Your Self:</h4>
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
                    className="btn btn-info"
                    type="submit"
                    value="Save">
                  </input>
                  <p>{this.state.flag}</p>
                </div>
              </div>
             </form>
          ):
          (
            <div className="row row3">
              <h4>Explain Your Self</h4>
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
                className="btn btn-info"
                onClick={this.edit.bind(this,)}>
                Edit
              </button>
            </div>
          )    
        }             
      </div>
    );
  }
}