import "./Sidebar.css";
import sloth from "../../images/sloth.jpeg";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiPinterestFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";

const Sidebar = () => {
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
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Tech</li>
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