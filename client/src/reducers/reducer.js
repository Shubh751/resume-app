const initialState = {
  Project:[],
  Education:[],
  Explain:[]
 };
 
 const reducer = (state=initialState,action)=>
 {
  switch(action.type)
  {
		case 'PROJECT_DATA':
		  console.log("in project-reducer",action.value)
        state={...state,
          Project: action.value
        }
        break;
    case 'EDUCATION_DATA':
      console.log("in education-reducer",action.value)
      state={...state,
        Education: action.value
      }
      break;
    case 'EXPLAIN_DATA':
      console.log("in explain-reducer",action.value)
      state={
        ...state,
        Explain:action.value
      }
      break;
    default:
  }
  return state;
 }
 export default reducer;