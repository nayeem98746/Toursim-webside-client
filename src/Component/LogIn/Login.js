import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
import logImg from "../../images/login-img.png"
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {singInUsingGoogle} = useAuth()
    return (
        <div className="main-div">

            <div className="input-style">
            <input type="email" placeholder="Your email" /><br /><br />
            <input type="password" placeholder="Password" /><br /><br />
            <button onClick={singInUsingGoogle} className="google-btn">Google Sign In</button>
        
            </div>
            <div>
                <img src={logImg} alt="" />
            </div>
        </div>
    );
};

export default Login;