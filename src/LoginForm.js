import React from 'react';

function LoginForm() {
	return (
		<div className="login formArea">
			<div className="register formArea">
				<form action="">
					<div className="emailInput input">
						<label htmlFor="loginEmail">Email:</label>
						<input type="text" id="loginEmail" />
					</div>
					<div className="passwordInput input">
						<label htmlFor="loginPassword">Password:</label>
						<input type="text" id="loginPassword" />
					</div>
					<button>Login</button>
				</form>
			</div>
		</div>
	);
}

export default LoginForm;
