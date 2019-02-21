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

export const project_Data = async (data) =>{
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
	console.log("in api",data,"  ",project_id)
	const token = localStorage.getItem('token');
	const url = "/project/"+project_id;
	let config={
		headers:{
		'Content-Type':'application/json',
		'authorization':'Bearer '+token
		}
	}

	await axios.patch(url,[{
		"propName":"title", "value":data.title,
		"propName":"start_date", "value":data.start_date,
		"propName":"end_date", "value":data.end_date,
		"propName":"member1", "value":data.member1,
		"propName":"member2", "value":data.member2,
		"propName":"member3", "value":data.member3,
		"propName":"description", "value":data.description,
		"propName":"location", "value":data.location,
		"propName":"company_name", "value":data.company_name,
	}],config);
}