import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = '/home';
		navigate(path);
	};
    
	return (
		<div className="register formArea">
			<form action="">
				<div className="emailInput input">
					<label htmlFor="emailField">Email:</label>
					<input type="text" id="emailField" />
				</div>
				<div className="passwordInput input">
					<label htmlFor="passwordField">Password:</label>
					<input type="text" id="passwordField" />
				</div>
				<div className="confirmInput input">
					<label htmlFor="confirmField">Confirm Password:</label>
					<input type="text" id="confirmField" />
				</div>
				<div className="registrationType input">
					<label htmlFor="regType">Confirm Password:</label>
					<select type="text" id="regType">
						<option value="" className="blankOption">
							-- select option --
						</option>
						<option value="Brand">Brand</option>
						<option value="Influencer">Influencer</option>
					</select>
				</div>
				<button onClick={routeChange}>Create Account</button>
			</form>
		</div>
	);
}

export default Register;
