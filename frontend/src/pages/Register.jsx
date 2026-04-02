import { useState } from "react";
import axios from "axios";

function Register(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [branch,setBranch] = useState("");

const register = async () => {

await axios.post("http://localhost:8080/register",{
name,
email,
password,
branch
});

alert("Registration Successful");

}

return(

<div style={{textAlign:"center",marginTop:"100px"}}>

<h2>Student Registration</h2>

<input placeholder="Name" onChange={(e)=>setName(e.target.value)} /><br/><br/>
<input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /><br/><br/>
<input placeholder="Password" onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
<input placeholder="Branch" onChange={(e)=>setBranch(e.target.value)} /><br/><br/>

<button onClick={register}>Register</button>

</div>

)

}

export default Register