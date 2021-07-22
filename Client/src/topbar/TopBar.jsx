import "./topbar.css"
// import profilepic from './images/new.jpg';
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { useContext } from "react";

export default function TopBar() {
    const {user,dispatch} = useContext(Context);
    const handleLogout = ()=>{
        dispatch({type:"LOGOUT"});
    }
     const publicFolder = "http://localhost:5000/images/";

    return (
        <div className="top">
            <div className="topLeft">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
            <i className="sidebarIcon fab fa-linkedin"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            {/* topIcon is the className here */}
            
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <Link to="/" style={{textDecoration:"none",color:"inherit"}}><li className="topListItems">Home</li></Link>
                    <Link to="/about-us" style={{textDecoration:"none",color:"inherit"}}><li className="topListItems">About </li></Link>
                    <Link to="/contact" style={{textDecoration:"none",color:"inherit"}}><li className="topListItems">Contact</li></Link>
                    <Link to="/write" style={{textDecoration:"none",color:"inherit"}}><li className="topListItems">Write</li></Link>
                    <Link to="/register" style={{textDecoration:"none",color:"inherit"}}></Link><li className="topListItemss" onClick={handleLogout}>{user && 'Logout'}</li>
                </ul>
            </div>
            <div className="topRight">
            {user?(
                <>            
                <Link to="/Settings" style={{textDecoration:"none",color:"inherit"}}><img className="topImg" src={publicFolder+user.profilePic} alt=""/></Link>
                {/* <span style={{marginLeft:"10px"}}>Account</span> */}
                {/* <i className="topSearchIcon fas fa-search"></i> */}
                </>
            ):(
                <ul className="topList">
                    <li className="topListItems">
                        <Link to="/login" style={{textDecoration:"none",color:"inherit"}}>Login</Link>
                    </li>
                    <li className="topListItems">
                        <Link to="/register" style={{textDecoration:"none",color:"inherit"}}>Register</Link>
                    </li>
                </ul>
            )}
            </div>        
        </div> 
    )
}
