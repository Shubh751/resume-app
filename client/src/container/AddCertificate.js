import AddCertificate from '../components/AddCertificate';
import { show_certificate, add_certificate } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.Certificate });
const mapDispatchToProps = dispatch => {
    return{
    	showCertificateData:()=> dispatch(show_certificate()),
      addCertificateData:(data) => dispatch(add_certificate(data))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(AddCertificate)