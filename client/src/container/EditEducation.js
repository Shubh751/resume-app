import EditEducation from '../components/EditEducation';
import { edit_Education_data, show_education } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.Education });
const mapDispatchToProps = dispatch => {
    return{
    	showEducationData:(student_id)=> dispatch(show_education(student_id)),
      editEducationData:(education_id,data) => dispatch(edit_Education_data(education_id,data))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(EditEducation)