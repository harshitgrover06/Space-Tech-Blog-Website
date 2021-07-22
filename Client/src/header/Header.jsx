import "./header.css"
import headerimage from "./images/homed.jpg";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Space & Tech</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src ={headerimage} alt=" "/> 
        </div>
    )
}
