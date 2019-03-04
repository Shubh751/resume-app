import Home from '../components/Home';
import { 
  show_image,
  edit_phone
} from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ Image: state.Image });
const mapDispatchToProps = dispatch => {
    return{
      showImageData:()=> dispatch(show_image()),
      editPhoneData:(phone)=> dispatch(edit_phone(phone))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Home)