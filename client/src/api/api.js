
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

