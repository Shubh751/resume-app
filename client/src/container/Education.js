import Education from '../components/Education';
import { show_education } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.Education });
const mapDispatchToProps = dispatch => {
    return{
      showEducationData:(student_id)=> dispatch(show_education(student_id))
      // saveProjectData:(data) => dispatch(save_Project_data(data))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Education)