import Home from '../components/Home';
import { show_image } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.Image });
const mapDispatchToProps = dispatch => {
    return{
      showImageData:()=> dispatch(show_image()),
      // saveProjectData:(data) => dispatch(save_Project_data(data))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Home)