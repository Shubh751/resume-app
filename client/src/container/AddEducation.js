import AddEducation from '../components/AddEducation';
import { add_Education_data, show_education } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.Education });
const mapDispatchToProps = dispatch => {
    return{
    	showEducationData:(student_id)=> dispatch(show_education(student_id)),
      addEducationData:(data) => dispatch(add_Education_data(data))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(AddEducation)