import "./contact.css";
import axios from "axios";
import { useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
export default function Contact () {
    // const [data,setData] = useState({
    //     firstname:"",
    //     lastname:"",
    //     // mail:"",
    //     phone:"",
    //     msg:""
    // })
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    //const [firstname,set] = useState("")
    const [phone,setPhone] = useState("")
    const [msg,setMsg] = useState("")
    const handleSubmit = async(o)=>{
        o.preventDefault();
        try{
            axios.post("http://localhost:5000/api/contact/feedback",{
            firstname,
            lastname,
            // mail:"",
            phone,
            msg
        }).then(res=>{console.log(res.data)&& window.location.replace("/home")})
        }catch(err){}
    }
    // const handle = (o)=>{
    //     const newdata = {...data}
    //     newdata[o.target.id] = o.target.value;
    //     setData(newdata);
    // }
    return(
        <div class="container">
            <span className="text1"><b>Contact</b></span>
            <form onSubmit={handleSubmit}>
                <div class="form-row">
                    <div class="input-data">
                        <input type="text" id="firstname" required onChange={o =>setFirstname(o.target.value)}/>
                        <div class="underline"></div>
                        <label for="">First Name</label>
                    </div>
                    <div class="input-data">
                    <input type="text" id="lastname" required onChange={o =>setLastname(o.target.value)}/>
                    <div class="underline"></div>
                    <label for="">Last Name</label>
                    </div>
                </div>
                <div class="form-row">
                {/* <div class="input-data">
                    <input type="email"  required onChange={(o)=>handleSubmit(o)} value={data.phone}/>
                    <div class="underline"></div>
                    <label for="">Email:</label>
                    </div> */}
                    <div class="input-data">
                    <input type="text" id="phone" required onChange={o =>setPhone(o.target.value)}/>
                    <div class="underline"></div>
                    <label for="">Phone no:</label>
                    </div>
                    
                </div>
                <div class="form-row">
                <div class="input-data textarea">
                    <textarea rows="8" cols="80" id="msg" required onChange={o =>setMsg(o.target.value)}></textarea>
                    <br />
                    <div class="underline"></div>
                    <label for="">Write your message</label>
                    <br />
                    <div class="form-row submit-btn">
                        <div class="input-data">
                        <div class="inner"></div>
                        <input type="submit" id="submit"/>
                        </div>
                    </div>
                </div>
                </div>
            </form>
             <Sidebar/> 
        </div>
        
    );
}