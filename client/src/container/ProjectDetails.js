import ProjectDetails from '../components/ProjectDetails';
import { save_Project_data, showProject } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.Project });
const mapDispatchToProps = dispatch => {
    return{
      showData:(id)=> dispatch(showProject(id)),
      saveData:(data) => dispatch(save_Project_data(data))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(ProjectDetails)