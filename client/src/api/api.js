
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

export const projectData = async (data) =>{
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
	.then(res=>{
		if(res.message==='Project Updated'){
			alert("Project Updated")
		}else{
			alert("please fill the details properly")
		}
	})
	.catch(error=>alert(error))
}

