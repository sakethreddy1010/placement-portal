import { Link } from "react-router-dom";

function Navbar(){

return(

<nav style={{
background:"#333",
padding:"10px"
}}>

<Link to="/" style={{color:"white",marginRight:"20px"}}>Home</Link>

<Link to="/login" style={{color:"white",marginRight:"20px"}}>Login</Link>

<Link to="/register" style={{color:"white",marginRight:"20px"}}>Register</Link>

<Link to="/jobs" style={{color:"white",marginRight:"20px"}}>Jobs</Link>

<Link to="/addjob" style={{color:"white"}}>Add Job</Link>

</nav>

)

}

export default Navbar;
