import "./SinglePost.css";
import { useContext, useEffect, useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useLocation } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from "../../context/Context";


const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({});
    const PF = 'http://localhost:5000/images/';
    const { user } = useContext(Context);


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('/posts/' + path);
            setPost(res.data);
        };
        getPost();
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username },
            });
            window.location.replace('/');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img 
                        src={PF + post.photo} 
                        alt="" 
                        className="singlePostImg" 
                    />
                )}
                <h1 className="singlePostTitle">
                    {post.title}
                    {post.username === user?.username && (
                    <div className="singlePostEdit">
                        <RiEditLine className="singlePostIcon" />
                        <RiDeleteBin6Line className="singlePostIcon" onClick={handleDelete}/>
                    </div>
                    )}
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: 
                        <Link to={`/?user=${post.username}`} className='link'>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">
                        Date: <b>{new Date(post.createdAt).toDateString()}</b>
                    </span>

                </div>
                <p className="singlePostDesc">{post.desc}</p>
            </div>
        </div>
    );
}

export default SinglePost;