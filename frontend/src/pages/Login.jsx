import { useState } from "react";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const login = () => {

if(email !== "" && password !== ""){
alert("Login Successful");
window.location.href="/jobs";
}else{
alert("Please enter email and password");
}

}

return(

<div style={{textAlign:"center",marginTop:"50px"}}>

<h2>Student Login</h2>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={login}>Login</button>

</div>

)

}

export default Login;