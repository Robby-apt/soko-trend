import React from 'react'

function Register() {
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
                <button>Create Account</button>
			</form>
		</div>
  );
}

export default Register