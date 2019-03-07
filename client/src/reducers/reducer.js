const initialState = {
  Project:[],
  Education:[],
  Explain:[],
  Certificate:[],
  Image:'',
  Skills:''
 };
 
 const reducer = (state=initialState,action)=>
 {
  switch(action.type)
  {
		case 'PROJECT_DATA':
		  console.log("in project-case",action.value)
        state={...state,
          Project: action.value
        }
        break;
    case 'EDUCATION_DATA':
      console.log("in education-case",action.value)
      state={...state,
        Education: action.value
      }
      break;
    case 'EXPLAIN_DATA':
      console.log("in explain-case",action.value)
      state={
        ...state,
        Explain:action.value
      }
      break;
    case 'CERTIFICATE_DATA':
      console.log("in certificate-case",action.value)
      state={
        ...state,
        Certificate:action.value
      }
      break;
    case 'IMAGE_DATA':
      console.log("in image-case",action.value)
      state={
        ...state,
        Image:action.value
      }
      break;
    case 'SKILLS_DATA':
      console.log("in skills-case",action.value)
      state={
        ...state,
        Skills:action.value
      }
      break;
    default:
  }
  return state;
 }
 export default reducer;