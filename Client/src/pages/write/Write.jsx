import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../Context/Context";
export default function Write({post}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCat] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [setcat] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();  
      const newPost = {
      username: user.username,
      categories,
      title,
      desc,
    };
    const newcat = {
      Name:categories, 
    };  
    if (file) {
      const data =new FormData();
      const filename = Date.now() +"_"+file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/posts/" + res.data._id);
    } catch (err) {};
    try {
      await axios.post("http://localhost:5000/api/category", newcat);
    } catch (err) {};
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
      <div className="writeFormGroup">
          <input
            placeholder="Enter Blog Category..."
            type="text"
            className="writeInputCategory"
            autoFocus={true}
            onChange={(e=>setCat(e.target.value)&&(o=>setcat(o.target.value)))}
          ></input>
        </div>
        <br/><br/>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        
        
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}