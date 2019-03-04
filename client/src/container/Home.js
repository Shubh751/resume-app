import Home from '../components/Home';
import { 
  show_image,
  edit_phone,
  edit_email,
  edit_location
} from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ Image: state.Image });
const mapDispatchToProps = dispatch => {
    return{
      showImageData:()=> dispatch(show_image()),
      editPhoneData:(phone)=> dispatch(edit_phone(phone)),
      editEmailData:(email)=> dispatch(edit_email(email)),
      editLocationData:(location)=> dispatch(edit_location(location)),
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Home)