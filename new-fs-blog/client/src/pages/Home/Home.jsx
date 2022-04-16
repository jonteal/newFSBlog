// import Sidebar from "../../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from 'axios';
import "./Home.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Posts from "../../components/Posts/Posts";

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts")
            setPosts(res.data)
        }
        fetchPosts();
    }, [])

    return (
        <>
        <Header />
        <div className="home">
            <Posts posts={posts} />
            <Sidebar />
        </div>
        </>
    );
};

export default Home;