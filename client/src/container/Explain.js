import Explain from '../components/Explain';
import { 
  save_explain,
  show_explain,
  edit_explain  
} from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.Explain });
const mapDispatchToProps = dispatch => {
  return{
    showExplainData:(student_id) => dispatch(show_explain(student_id)),
    saveExplainData:(data)=> dispatch(save_explain(data)),
    editExplainData:(explain,explain_id)=> dispatch(edit_explain(explain,explain_id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Explain)