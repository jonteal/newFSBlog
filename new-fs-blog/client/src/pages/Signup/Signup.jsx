import './Signup.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const Signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('/auth/signup', {
            username, 
            email, 
            password,
        });
        console.log(res);

    }


    return (
        <div className='signup'>
            <span className="signupTitle">Signup</span>
            <form className="signupForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    type="text" 
                    className='signupInput' 
                    placeholder='Enter your username...' 
                    onChange={e => setUsername(e.target.value)}
                />

                <label>Email</label>
                <input 
                    type="text" 
                    className='signupInput' 
                    placeholder='Enter your email...' 
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input 
                    type="password" 
                    className='signupInput' 
                    placeholder='Enter your password...' 
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="signupButton" type='submit'>Signup</button>

            </form>
            <button className="loginButton">
                <Link className='link' to="/login">Login</Link>
            </button>
        </div>
    );
}

export default Signup;