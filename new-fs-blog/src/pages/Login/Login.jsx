import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className='loginInput' placeholder='Enter your email...' />
                <label>Password</label>
                <input type="password" className='loginInput' placeholder='Enter your password...' />
                <button className="loginPageButton">Login</button>

            </form>
            <button className="loginRegisterButton">
                <Link className='link' to="/signup">Signup</Link>
            </button>
        </div>
    );
}

export default Login;