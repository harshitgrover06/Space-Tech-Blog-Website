import "./register.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Register() {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState(false)
  const handleSubmit=async(o)=>{
    o.preventDefault();
    setError(false);
    try{
    axios.post("http://localhost:5000/api/auth/register",{
      username,
      email,
      password,
    }).then(response=>{
      response.data && window.location.replace("/login");
    })}
    //resolve catch req issue
    catch(err){ 
      setError(true);
      console.log(err);
      console.log("error");
    }
  }
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." required
        onChange={o =>setUsername(o.target.value)}/>
        <label>Email</label>
        <input className="registerInput" type="email" placeholder="Enter your email..."  required
        onChange={o =>setEmail(o.target.value)}/>
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." required 
        onChange={o =>setPassword(o.target.value)}/>
        <button className="registerButton" type="submit">Register</button>
         </form>
      <button className="registerLoginButton"><Link to="/login" style={{textDecoration:"none",color:"inherit"}}>Login</Link></button>
      {error && <span style={{color:"red",marginTop:""}}>Something Went Wrong !!</span>}
    </div>
    )
}
