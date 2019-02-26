import EditCertificate from '../components/EditCertificate';
import { edit_certificate, show_certificate } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.Certificate });
const mapDispatchToProps = dispatch => {
    return{
    	showCertificateData:()=> dispatch(show_certificate()),
      editCertificateData:(certificate_id,data) => dispatch(edit_certificate(certificate_id,data))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(EditCertificate)