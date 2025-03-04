import React from 'react';
import { useState } from 'react';
import LoginForm from './LoginForm';
import Register from './Register';

function Login() {
	return (
		<div className="userRegAndLogin">
			<nav className="regNav">
				<div className="branding">
					<img src="./public/213972948.png" alt="Soko Trend Logo" />
				</div>
			</nav>
			<div className="registryAndLogin">
				<div className="formSwitcher">
					<button>Sign up</button>
					<button>Login</button>
				</div>
				<Register />
				<LoginForm />
			</div>
		</div>
	);
}

export default Login;
