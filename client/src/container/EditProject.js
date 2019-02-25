import { edit_project, show_project } from '../actions/actions';
import { connect } from 'react-redux';
import EditProject from '../components/EditProject';

const mapStateToProps = state => ({ data: state.Project });
const mapDispatchToProps = dispatch => {
    return{
      showProjectData:(id)=> dispatch(show_project(id)),
      editProjectData:(project_id,data) => dispatch(edit_project(project_id,data))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(EditProject)