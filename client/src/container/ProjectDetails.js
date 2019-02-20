import ProjectDetails from '../components/ProjectDetails';
import { save_Project_data } from '../actions/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return{
      saveData:(data) => dispatch(save_Project_data(data))
    }
  }

export default connect(null,mapDispatchToProps)(ProjectDetails)