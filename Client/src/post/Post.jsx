import './post.css'
import { Link } from 'react-router-dom'

export default function Post({post}) {
    const publicFolder = "http://localhost:5000/images/"
    
    return (
        <div className="post">
            {post.photo && <img className="postImg" src={publicFolder + post.photo} alt="" />}
            {/* <Link to="/posts" ><img className = "postImg" src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=" " /></Link> */}
            <div className="postInfo">
                <div className="postCats"> 
                    {post.categories.map((c) =>(
                        <span className="postCat">{c.name}</span>))
                    }
                </div>
                <span className="postTitle">
                <Link to={`/posts/${post._id}`} style={{textDecoration:"none",color:"inherit"}}>{post.title}</Link>
                </span>
                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <div className="postDesc">
                {post.desc}
                <Link to={`/posts/${post._id}`} style={{textDecoration:"none",color:"inherit"}}><b>...(read more)</b></Link>
            </div>
        </div>
    )
}
