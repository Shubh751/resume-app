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
	console.log("in api",data,"  ",education_id);
	console.log("qualification",data.qualification)
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