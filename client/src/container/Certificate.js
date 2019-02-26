import Certificate from '../components/Certificate';
import { show_certificate } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.Certificate });
const mapDispatchToProps = dispatch => {
    return{
        showCertificateData:()=> dispatch(show_certificate())
      // saveProjectData:(data) => dispatch(save_Project_data(data))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Certificate)