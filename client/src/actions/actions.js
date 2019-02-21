export function save_Project_data(data){
    return { type:'SAVE_PROJECT_DATA',data }
}

export function showProject(id){
    return { type:'SHOW_PROJECT',id}
}

export function edit_project(project_id,data){
    return { type:'EDIT_PROJECT', project_id,data }
}


// export function addCom(data1){
//     return { type: 'ADD_COMMENT', data1 }
// }

// export function addPost(post){
//     return { type:'ADD_POST', post }
// }

// export function editPost(data2){
//     return { type:'EDIT',data2}
// }

export function student_SignUp(data){
    return { type: 'STUDENT_SIGNUP',data }
}
