import Home from '../components/Home';
import { 
  show_image,
  edit_phone,
  edit_email,
  edit_location,
  save_skills,
  show_skills,
  generate_pdf,
  edit_skills
} from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ Image: state.Image, Skills:state.Skills });
const mapDispatchToProps = dispatch => {
    return{
      showImageData:()=> dispatch(show_image()),
      editPhoneData:(phone)=> dispatch(edit_phone(phone)),
      editEmailData:(email)=> dispatch(edit_email(email)),
      editLocationData:(location)=> dispatch(edit_location(location)),
      saveSkillsData:(skills)=> dispatch(save_skills(skills)),
      showSkillsData:()=> dispatch(show_skills()),
      editSkillsData:(skills_id,skills)=> dispatch(edit_skills(skills_id,skills)),
      generatePdf:()=> dispatch(generate_pdf())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Home)