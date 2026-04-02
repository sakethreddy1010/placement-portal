import { useState } from "react";
import axios from "axios";

function AddJob(){

const [company,setCompany] = useState("");
const [role,setRole] = useState("");
const [location,setLocation] = useState("");
const [salary,setSalary] = useState("");

const addJob = async () => {

await axios.post("http://localhost:8080/addJob",{
company,
role,
location,
salary
});

alert("Job Added Successfully");

};

return(

<div style={{textAlign:"center"}}>

<h2>Add Job</h2>

<input placeholder="Company"
value={company}
onChange={(e)=>setCompany(e.target.value)}
/>

<br/><br/>

<input placeholder="Role"
value={role}
onChange={(e)=>setRole(e.target.value)}
/>

<br/><br/>

<input placeholder="Location"
value={location}
onChange={(e)=>setLocation(e.target.value)}
/>

<br/><br/>

<input placeholder="Salary"
value={salary}
onChange={(e)=>setSalary(e.target.value)}
/>

<br/><br/>

<button onClick={addJob}>Add Job</button>

</div>

)

}

export default AddJob;