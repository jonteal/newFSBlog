import './Settings.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import sunnycliff from '../../images/sunnycliff.avif';
import { RiUser3Fill } from "react-icons/ri";

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={sunnycliff} alt="sunny cliff" />
                        <label htmlFor="fileInput">
                            <RiUser3Fill className='settingsPPIcon' />
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Jon' />
                    <label>Email</label>
                    <input type="email" placeholder='jon@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}

export default Settings;