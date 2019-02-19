const initialState = {
    posts:[],
    flag:""
 };
 
 const reducer = (state=initialState,action)=>
 {
    switch(action.type)
    {
        case 'POST_ASYNC':
            state={
                 posts: action.value
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