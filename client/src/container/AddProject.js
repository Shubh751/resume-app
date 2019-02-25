import AddProject from '../components/AddProject';
import { save_Project_data, show_project } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.Project });
const mapDispatchToProps = dispatch => {
    return{
      showProjectData:(id)=> dispatch(show_project(id)),
      saveProjectData:(data) => dispatch(save_Project_data(data))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(AddProject)