const initialState = {
	Education:[]
 };
 
 const EducationReducer = (state=initialState,action)=>
 {
  switch(action.type)
  {
		case 'EDUCATION_DATA':
			console.log("in education-reducer",action.value)
      state={
        Education: action.value
			}
			break;
    default:
  }
  return state;
 }
 export default EducationReducer;