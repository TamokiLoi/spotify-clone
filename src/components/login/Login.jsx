import React from 'react';
import { accessUrl } from '../../spotify';

import './Login.css';

function Login() {
    return (
        <div className="login">
            <img
                src="/spotify-logo.jpeg"
                alt="spotify-logo"
            />
            <a href={accessUrl}>LOGIN TO SPOTIFY</a>
        </div>
    )
}

export default Login
