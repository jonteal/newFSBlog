import "./Header.css";
import plant from "../images/plant.jpg";

const Header = () => {
    return (
        <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={plant} alt="waves" />
        </div>
    );
};

export default Header;