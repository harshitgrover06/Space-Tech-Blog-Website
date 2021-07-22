import './setting.css'
import Sidebar from '../../sidebar/Sidebar'
// import profilepic from './new.jpg';
import { useContext,useState } from 'react'
import { Context } from '../../Context/Context';
import axios from 'axios';
export default function Setting() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const { user, dispatch } = useContext(Context);
    const publicFolder = "http://localhost:5000/images/";
    const handleSubmit = async (o) => {
    o.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
       dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
       dispatch({ type: "UPDATE_FAILURE" });
    }
  };
    return (
        <div className="setting">
            <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Your Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>
            <form  className="settingForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settingPP">
                <img className="imagepp" src={file ? URL.createObjectURL(file): publicFolder+user.profilePic}/>
                <label htmlFor="fileInput">
                    <i className="SettingPPIcon far fa-user-circle"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={(o) => setFile(o.target.files[0])} required/>
                </div>
                <label >Username</label>
                <input type="text" placeholder={user.username} onChange={(o) => setUsername(o.target.value)} required/>
                <label >Email</label>
                <input type="email" placeholder={user.email} onChange={(o) => setEmail(o.target.value)} required/>
                <label >Password</label>
                <input type="password" placeholder="*********" onChange={(o) => setPassword(o.target.value)} required/>
                <button className="settingSubmit" type="submit">Update</button>
                {success && (<span style={{color:"green",margin:"15px",textAlign:"center"}}>Profile has been updated successfully !!</span>)};
                
            </form>
            </div>
            <Sidebar/>
        </div>
    )
}
