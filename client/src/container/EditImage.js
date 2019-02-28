import EditImage from '../components/EditImage';
import { show_image,edit_image } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.Image });
const mapDispatchToProps = dispatch => {
    return{
      showImageData:()=> dispatch(show_image()),
      editImageData:(formData) => dispatch(edit_image(formData))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(EditImage)