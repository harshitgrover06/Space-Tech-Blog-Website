import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import "./singlePost.css";

export default function Singlepost() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];// to get the object id
    const [post,setPost] = useState({});
    const {user} = useContext(Context);
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [updateMode,setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
          axios.get('http://localhost:5000/api/posts/'+path).then(response=>{
            setPost(response.data);
            setTitle(response.data.title);
            setDesc(response.data.desc);

          });  
        };
        getPost();
      }, [path]);
      const publicFolder = "http://localhost:5000/images/";
      const handleDelete = async()=>{
        try{
            await axios.delete(`/posts/${post._id}` ,{
            data:{username: user.username},
            });
            window.location.replace("/");
        }catch(err){

        }      
      };
      const handleUpdate = async()=>{
        try{
          await axios.put(`/posts/${post._id}`,{
            username: user.username,
            title,
            desc
          });
          setUpdateMode(false);}
          catch(err){
        }
      }
      return (
        <div className="singlePost">
          <div className="singlePostWrapper">
            {post.photo && (
              <img src={publicFolder + post.photo} alt="" className="singlePostImg" />
            )}
            {updateMode ? (
              <input
                type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(o) => setTitle(o.target.value)}
              />
            ) : (
              <h1 className="singlePostTitle">
                {title}
                {post.username === user.username && (
                  <div className="singlePostEdit">
                    <i
                      className="singlePostIcon far fa-edit"
                      onClick={() => setUpdateMode(true)}
                    ></i>
                    <i
                      className="singlePostIcon far fa-trash-alt"
                      onClick={handleDelete}
                    ></i>
                  </div>
                )}
              </h1>
            )}
            <div className="singlePostInfo">
              <span className="singlePostAuthor">
                Author:
                <Link to={`/?user=${post.username}`} style={{textDecoration:"none",color:"inherit"}}>
                  <b> {post.username}</b>
                </Link>
              </span>
              <span className="singlePostDate">
                {new Date(post.createdAt).toDateString()}
              </span>
            </div>
            {updateMode ? (
              <textarea
                className="singlePostDescInput" value={desc} onChange={(e) => setDesc(e.target.value)}
              />
            ) : (
              <p className="singlePostDesc">{desc}</p>
            )}
            {updateMode && (
              <button className="singlePostButton" onClick={handleUpdate} >
                Update
              </button>
            )}
          </div>
        </div>
      );
    }