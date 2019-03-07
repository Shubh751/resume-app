import React,{ Component } from 'react';
export default class Final extends Component{
  render(){
    return(
      <div className="Final container">
        <p>
          Your Resume has beent sent to your Email-id => 
          <span>
            {localStorage.getItem('email')}
          </span>
        </p>
      </div>
    );
  }
}