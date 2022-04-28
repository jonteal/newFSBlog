import './Settings.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import { RiUser3Fill } from "react-icons/ri";
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

const Settings = () => {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = {
            userId: user._id,
            username, email, password
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            updatedUser.profilePic = filename;
            try {
                await axios.post('/upload', data)
            } catch (err) {
                console.error(err);
            }
        }
        try {
            await axios.put('/users'+user._id, updatedUser);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={user.profilePic} alt="sunny cliff" />
                        <label htmlFor="fileInput">
                            <RiUser3Fill className='settingsPPIcon' />
                        </label>
                        <input 
                            type="file" 
                            id="fileInput" 
                            style={{display: "none"}} 
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)}/>
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                    <button className="settingsSubmit" type='submit'>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}

export default Settings;