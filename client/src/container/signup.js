import SignUp from '../components/SignUp';
import  { connect } from 'react-redux'; 
import { student_SignUp } from '../actions/actions';

const mapDispatchToProps = dispatch =>{
    return{
      signup:(data) => dispatch(student_SignUp(data))
    }
  }
  
export default connect(null,mapDispatchToProps)(SignUp)