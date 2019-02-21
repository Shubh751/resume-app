import { edit_project, showProject } from '../actions/actions';
import { connect } from 'react-redux';
import EditProject from '../components/EditProject';

const mapStateToProps = state => ({ data: state.Project });
const mapDispatchToProps = dispatch => {
    return{
      showData:(id)=> dispatch(showProject(id)),
      editProject:(project_id,data) => dispatch(edit_project(project_id,data))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(EditProject)