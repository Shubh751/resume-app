import ProjectDetails from '../components/ProjectDetails';
import { save_Project_data, show_project } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.Project });
const mapDispatchToProps = dispatch => {
    return{
      showProjectData:(student_id)=> dispatch(show_project(student_id)),
      saveProjectData:(data) => dispatch(save_Project_data(data))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(ProjectDetails)