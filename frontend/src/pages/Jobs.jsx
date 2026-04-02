import { useEffect, useState } from "react";
import axios from "axios";

function Jobs(){

const [jobs,setJobs] = useState([]);
const [search,setSearch] = useState("");

useEffect(()=>{

axios.get("http://localhost:8080/jobs")
.then(res=>{
setJobs(res.data);
})
.catch(err=>{
console.log(err);
})

},[])

const applyJob = async (jobId) => {

try{

await axios.post(`http://localhost:8080/apply?studentId=1&jobId=${jobId}`)

alert("Application Submitted Successfully")

}catch(error){

alert("Error applying job")

}

}

return(

<div style={{textAlign:"center"}}>

<input
type="text"
placeholder="Search by company or role"
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{margin:"20px",padding:"5px"}}
/>

<h2>Available Jobs</h2>

{jobs
.filter(job =>
job.company.toLowerCase().includes(search.toLowerCase()) ||
job.role.toLowerCase().includes(search.toLowerCase())
)
.map(job => (

<div key={job.id} style={{border:"1px solid gray",margin:"20px",padding:"10px"}}>

<h3>{job.company}</h3>

<p>Role: {job.role}</p>

<p>Location: {job.location}</p>

<p>Salary: {job.salary}</p>

<button onClick={()=>applyJob(job.id)}>Apply Job</button>

</div>

))}

</div>

)

}

export default Jobs 