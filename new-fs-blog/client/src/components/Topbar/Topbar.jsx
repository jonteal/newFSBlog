import "./Topbar.css";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiPinterestFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import Me from "../../images/me.jpeg";
import { Link } from 'react-router-dom';

const Topbar = () => {

    const user = false;
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
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        
                            <img className="topImg" src={Me} alt="Me" />
                            ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to='/login'>LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to='/signup'>SIGNUP</Link>
                            </li>
                        </ul>
                    )}
                <RiSearchLine className="topSearchIcon" />
            </div>
        </div>
    );
    };

export default Topbar;