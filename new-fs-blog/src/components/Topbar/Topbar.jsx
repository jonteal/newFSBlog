import "./Topbar.css";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiPinterestFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import Me from "../../images/me.jpeg";

const Topbar = () => {
    return (
        <div className="top">
        <div className="topLeft">
            <RiFacebookBoxFill className="topIcon" />
            <RiTwitterFill className="topIcon" />
            <RiPinterestFill className="topIcon" />
            <RiInstagramFill className="topIcon" />
        </div>
        <div className="topCenter">
            <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className="topImg" src={Me} alt="Me" />
            <RiSearchLine className="topSearchIcon" />
        </div>
        </div>
    );
    };

export default Topbar;