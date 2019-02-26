export function save_Project_data(data){
    return { type:'SAVE_PROJECT_DATA',data }
}

export function show_project(student_id){
    return { type:'SHOW_PROJECT',student_id}
}

export function edit_project(project_id,data){
    return { type:'EDIT_PROJECT', project_id,data }
}

export function show_education(student_id){
    return { type:'SHOW_EDUCATION_DATA', student_id }
}

export function edit_Education_data(education_id,data){
    return { type:'EDIT_EDUCATION_DATA', education_id,data }
}

export function add_Education_data(data){
    return { type:'ADD_EDUCATION_DATA',data }
}

export function save_explain(data){
    return { type:'SAVE_EXPLAIN_DATA',data }
}

export function show_explain(student_id){
    return { type:'SHOW_EXPLAIN_DATA',student_id }
}

export function edit_explain(explain,explain_id){
    return { type:'EDIT_EXPLAIN_DATA',explain,explain_id }
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
