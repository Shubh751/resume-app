const initialState = {
    Project:[]
 };
 
 const reducer = (state=initialState,action)=>
 {
    switch(action.type)
    {
        case 'PROJECT_DATA':
            state={
                 Project: action.value
            }
            break;
        case 'ADD_POST_ASYNC':
             state={
                 posts:[...state.posts,action.value]
             }
             break;
        case 'COMPLETE':
             state={
                 posts:[...state.posts],
                 flag:action.value
             }
             break;
        default:
     }
    return state;
 }
 export default reducer;