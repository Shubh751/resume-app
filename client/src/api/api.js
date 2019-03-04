import axios from 'axios';

export const student_sign_Up = async (url,data) =>{
  console.log("data in api",data)
  await fetch(url,{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
        'Content-Type':'application/json'                                                   
    }
  }).then(res=>res.json())
  .then(res=>{
    if(res.message==='User created')
    {
        return alert("Registered Successfully");
    }
    else
    {
        alert("Please fill the form properly");
    }
  }).catch(error=>alert(error))
}

export const project = async (id) =>{
	const url="/project/"+id;
	const token=localStorage.getItem('token');
	const data = await fetch(url,{
		method:'GET',
		headers:{
			'Content-Type':'application/json',
			'authorization':'Bearer '+token
		}
	}).then(res=>res.json())
	.catch(error=>alert(error));
	return data;
}

export const save_project_Data = async (data) =>{
	data.student_id=localStorage.getItem('id');
	const token=localStorage.getItem('token');
	console.log("data in api.....",data)
	await fetch("/project",{
		method:'POST',
		body:JSON.stringify(data),
		headers:{
			'Content-Type':'application/json',
			'authorization':'Bearer '+token
		}
	}).then(res=>res.json())
	.catch(error=>alert(error))
}

export const edit_project_data = async (project_id,data)=>{
	const token = localStorage.getItem('token');
	const url = "/project/"+project_id;
	let config={
		headers:{
		'Content-Type':'application/json',
		'authorization':'Bearer '+token
		}
	}
	await axios.patch(url,
	{
		"title":data.title,
		"start_date":data.start_date,
		"end_date":data.end_date,
		"member1":data.member1,
		"member2":data.member2,
		"member3":data.member3,
		"description":data.description,
		"location":data.location,
		"company_name":data.company_name
	},config);
}

export const show_education_data = async (student_id) =>{
	const url="/education/"+student_id;
	const token=localStorage.getItem('token');
	const data = await fetch(url,{
		method:'GET',
		headers:{
			'Content-Type':'application/json',
			'authorization':'Bearer '+token
		}
	}).then(res=>res.json())
	.catch(error=>alert(error));
	return data;
}

export const edit_education_data = async (education_id,data) =>{
	const token = localStorage.getItem('token');
	const url = "/education/"+education_id;
	let config={
		headers:{
		'Content-Type':'application/json',
		'authorization':'Bearer '+token
		}
	}
	await axios.patch(url,
	{
		"qualification":data.qualification,
		"start_date":data.start_date,
		"end_date":data.end_date,
		"location":data.location,
		"institute_name":data.institute_name
	},config);
}

export const add_education_data = async (data) =>{
	data.student_id=localStorage.getItem('id');
	const token=localStorage.getItem('token');
	await fetch("/education",{
		method:'POST',
		body:JSON.stringify(data),
		headers:{
			'Content-Type':'application/json',
			'authorization':'Bearer '+token
		}
	}).then(res=>res.json())
	.catch(error=>alert(error))
}

export const save_explain_data = async (data) =>{
	const token=localStorage.getItem('token');
	await fetch("/explain",{
		method:'POST',
		body:JSON.stringify(data),
		headers:{
			'Content-Type':'application/json',
			'authorization':'Bearer '+token
		}
	}).then(res=>res.json())
	.catch(error=>alert(error))
}

export const show_explain_data = async (student_id) =>{
	const token=localStorage.getItem('token');
	const url="/explain/"+student_id;
	const data = await fetch(url,{
		method:'GET',
		headers:{
			'Content-Type':'application/json',
			'authorization':'Bearer '+token
		}
	}).then(res=>res.json())
	.catch(error=>alert(error))
	return data;
}

export const edit_explain_data = async (explain,explain_id) =>{
	const token = localStorage.getItem('token');
	const url="/explain/"+explain_id;
	let config={
		headers:{
		'Content-Type':'application/json',
		'authorization':'Bearer '+token
		}
	}
	await axios.patch(url,
	{
		"explain":explain
	},config);
}


export const show_certificate_data = async () =>{
	const token = localStorage.getItem('token');
	const student_id = localStorage.getItem('id');
	const url="/certificate/"+student_id;
	const data = await fetch(url,{
		method:'GET',
		headers:{
			'Content-Type':'application/json',
			'authorization':'Bearer '+token
		}
	}).then(res=>res.json())
	.catch(error=>alert(error))
	return data;
}

export const add_certificate_data = async (data) =>{
	data.student_id=localStorage.getItem('id');
	const token=localStorage.getItem('token');
	await fetch("/certificate",{
		method:'POST',
		body:JSON.stringify(data),
		headers:{
			'Content-Type':'application/json',
			'authorization':'Bearer '+token
		}
	}).then(res=>res.json())
	.catch(error=>alert(error))
}

export const edit_certificate_data = async (certificate_id,data) =>{
	const token = localStorage.getItem('token');
	const url = "/certificate/"+certificate_id;
	let config={
		headers:{
		'Content-Type':'application/json',
		'authorization':'Bearer '+token
		}
	}
	await axios.patch(url,
	{
		"title":data.title,
		"start_date":data.start_date,
		"end_date":data.end_date,
		"institute_name":data.institute_name
	},config);
}

export const show_image_data = async () =>{
	const token = localStorage.getItem('token');
	const student_id = localStorage.getItem('id');
	const url="/image/"+student_id
	const data = await fetch(url,{
		method:'GET',
		headers:{
			'Content-Type':'application/json',
			'authorization':'Bearer '+token
		}
	}).then(res=>res.json())
	.catch(error=>alert(error))
	try{
		const image = data[0].student_image;
		return image;
	}catch(error){
		console.log(error)
	}
}

export const edit_image_data =  async (formData) =>{
	const token = localStorage.getItem('token');
	const student_id = localStorage.getItem('id');
	const url = "/image/"+student_id;
	const data = await fetch(url,{
		method:'GET',
		headers:{
			'content-type': 'multipart/form-data',
			'authorization':'Bearer '+token
		}
	}).then(resp=>resp.json())
	.catch(error=>console.log(error));

	console.log("image data from database",data[0]._id)
	const image_id = data[0]._id;
	const config = {
		headers: {
			'content-type': 'multipart/form-data',
			'authorization':'Bearer '+token
		}
	};
	const url1 = "/image/"+image_id;
	await axios.patch(url1,formData,config);
}

export const add_image_data =  async (formData) =>{
	const token = localStorage.getItem('token');
	const config = {
		headers: {
				'content-type': 'multipart/form-data',
				'authorization':'Bearer '+token
		}
	};
	await axios.post("/image",formData,config);
}

export const edit_phone_data = async(phone) =>{
	const token = localStorage.getItem('token');
	const student_id = localStorage.getItem('id');
	const url = "/student/editPhone/"+student_id;
	let config={
		headers:{
		'Content-Type':'application/json',
		'authorization':'Bearer '+token
		}
	}
	await axios.patch(url,
	{
		"phone":phone,
	},config);
}

export const edit_email_data = async(email) =>{
	const token = localStorage.getItem('token');
	const student_id = localStorage.getItem('id');
	const url = "/student/editEmail/"+student_id;
	let config={
		headers:{
		'Content-Type':'application/json',
		'authorization':'Bearer '+token
		}
	}
	await axios.patch(url,
	{
		"email":email,
	},config);
}

export const edit_location_data = async(location) =>{
	const token = localStorage.getItem('token');
	const student_id = localStorage.getItem('id');
	const url = "/student/editLocation/"+student_id;
	let config={
		headers:{
		'Content-Type':'application/json',
		'authorization':'Bearer '+token
		}
	}
	await axios.patch(url,
	{
		"location":location,
	},config);
}