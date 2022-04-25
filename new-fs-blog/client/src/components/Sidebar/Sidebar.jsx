import "./Sidebar.css";
import sloth from "../../images/sloth.jpeg";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiPinterestFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";

const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('/categories');
            setCats(res.data);
        };
        getCats();
    })
    return (
        <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={sloth} alt="sloth" />
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
            libero! Explicabo optio perspiciatis animi fugit aperiam vel ipsum,
            ratione reiciendis velit qui sequi aspernatur at molestiae libero
            mollitia, soluta fuga.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul>
                {cats.map(c => (
                    <li className="sidebarListItem">{c.name}</li>
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <RiFacebookBoxFill className="sidebarIcon" />
            <RiTwitterFill className="sidebarIcon" />
            <RiPinterestFill className="sidebarIcon" />
            <RiInstagramFill className="sidebarIcon" />
            </div>
        </div>
        </div>
    );
};

export default Sidebar;