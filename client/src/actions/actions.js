export function student_SignUp(data){
    return { type: 'STUDENT_SIGNUP',data }
}

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

export function show_certificate(){
    return { type:'SHOW_CERTIFICATE_DATA' }
}

export function add_certificate(data){
    return { type:'ADD_CERTIFICATE_DATA', data }
}

export function edit_certificate(certificate_id,data){
    return { type:'EDIT_CERTIFICATE_DATA', certificate_id,data }
}

export function show_image(){
    return { type:'SHOW_IMAGE_DATA' }
}

export function edit_image(formData){
    return { type:'EDIT_IMAGE_DATA', formData }
}

export function add_image(formData){
    return { type:'ADD_IMAGE_DATA', formData }
}

export function edit_phone(phone){
    return { type:'EDIT_PHONE_DATA', phone }
}

export function edit_email(email){
    return { type:'EDIT_EMAIL_DATA', email }
}

export function edit_location(location){
    return { type:'EDIT_LOCATION_DATA', location }
}