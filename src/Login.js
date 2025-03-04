import React from 'react';
import { useState } from 'react';
import LoginForm from './LoginForm';
import Register from './Register';

function Login() {
	const [formDisplay, setFormDisplay] = useState('register');
	return (
		<div className="userRegAndLogin">
			<nav className="regNav">
				<div className="branding">
					<img src="./213972948.png" alt="Soko Trend Logo" />
					<h1>Soko Trend</h1>
				</div>
			</nav>
			<div className="registryAndLogin">
				<p className="introText">
					Welcome to Soko Trend, an online platform that seeks to link
					content creators to reputable brands for partnership.
					<br />
					Our aim is to bridge the gap between upcoming content
					creators and brands thus making e-marketting more efficient
				</p>
				<div className="formSwitcher">
					<button onClick={() => setFormDisplay('register')}>
						Sign up
					</button>
					<button onClick={() => setFormDisplay('login')}>
						Login
					</button>
				</div>
				{formDisplay == 'register' ? <Register /> : <LoginForm />}
				{/* <Register />
				<LoginForm /> */}
			</div>
		</div>
	);
}

export default Login;
