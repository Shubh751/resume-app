import AddImage from '../components/AddImage';
import { show_image,add_image } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.Image });
const mapDispatchToProps = dispatch => {
    return{
      showImageData:()=> dispatch(show_image()),
      addImageData:(formData) => dispatch(add_image(formData))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(AddImage)