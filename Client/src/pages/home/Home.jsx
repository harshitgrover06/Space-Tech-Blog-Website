import Posts from "../../posts/Posts"
import Sidebar from "../../sidebar/Sidebar"
import Header from "../../header/Header"
import Footer from "../../footer/Footer";
import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  console.log(search);
  useEffect(() => {
    const fetchPosts = async () => {
      axios.get('http://localhost:5000/api/posts'+search).then(response=>{
        setPosts(response.data)
      });  
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
      
    </>
  );
}