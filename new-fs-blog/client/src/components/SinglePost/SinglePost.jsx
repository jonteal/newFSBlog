import "./SinglePost.css";
import ocean from '../../images/ocean.jpeg';
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useLocation } from 'react-router';
import { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('/posts/' + path);
            setPost(res.data);
        };
        getPost();
    }, [path]);

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img 
                        src={post.photo} 
                        alt="" 
                        className="singlePostImg" 
                    />
                )}
                <h1 className="singlePostTitle">{post.title}
                    <div className="singlePostEdit">
                        <RiEditLine className="singlePostIcon" />
                        <RiDeleteBin6Line className="singlePostIcon" />
                    </div>
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