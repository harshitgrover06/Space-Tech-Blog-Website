import "./sidebar.css"
import sideimage from "./images/c.png"
import img from "./images/side.jpg"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import axios from "axios"

export default function Sidebar() {
    const [cat,setCat] = useState([]);
    const [postTitle,setPostTitle] = useState([]);
    useEffect(()=>{
        const getCat = async()=>{
            axios.get("http://localhost:5000/api/category").then(response=>{
                setCat(response.data);
            })
        };
        getCat();
    },[]);
    var a;
    useEffect(()=>{
        const getPostTitle = async()=>{
            await axios.get("http://localhost:5000/api/posts").then(response=>{
                setPostTitle(response.data);
                console.log(response.data);
            })
        };
        getPostTitle();
    },[]);
    
  
    return (
        <div className="sidebar">
            <div className="sidebarItems">
                <span className="sidebarTitle">About us</span>
                <img className ="sideimg" src={sideimage} alt=" "/>
                <p className="we">We are Space & Tech Blogs and our aim is to build a community to amplify interests of people in various fields and introduce them to various challenges and stories faced by other, so that they take them as inspiration and proceed further in life</p>
            </div>
            <div className="sidebarItems">
                <span className="sidebarTitle">Categories</span>
                    <ul className="sidebarList">
                        {cat.map((c)=>(
                            <Link to={`/?cat=${c.Name}`}style={{textDecoration:"none",color:"inherit"}}>
                            <li className="sidebarListItems">{c.Name}</li>
                            </Link>
                        ))}
                        
                        {/* <li className="sidebarListItem">Space</li>
                        <li className="sidebarListItem">Science</li>
                        <li className="sidebarListItem">AI and ML</li>
                        <li className="sidebarListItem">IOT</li>
                        <li className="sidebarListItem">App Development</li>
                        <li className="sidebarListItem">Web Development</li> */}
                    </ul>
            </div>
            <div className="sidebarItems">
                <span className="sidebarTitle">Follow us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-linkedin"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
            <hr></hr>
            <div className="recentposts">
                <span className="recentpostTitle">Contact us:<br/>testmail2800@gmail.com<br/>9996637101</span>
                <div className="recentposts">
                        {/* {postTitle.map((p)=>(
                            <li className="sidebarListItem">{p.title}</li>
                        ))} */}
                        



                    {/* <img classname="recentpostimage" src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=" "/>
                    <Link to="/singlepost"  style={{textDecoration:"none",color:"inherit"}}><div className="recentpostsitem">Lorem ipsum dolor sit amet</div></Link>
                    <br></br>
                    <img classname="recentpostimage" src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=" "/>
                    <Link to="/singlepost" style={{textDecoration:"none",color:"inherit"}}><div className="recentpostsitem">Lorem ipsum dolor sit amet</div></Link>
                    <br></br>
                    <img classname="recentpostimage" src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=" "/>
                    <Link to="/singlepost" style={{textDecoration:"none",color:"inherit"}}><div className="recentpostsitem">Lorem ipsum dolor sit amet</div></Link>
                    <br></br>
                     */}
                </div>


            </div>
        </div>
    )
}
