import React, { useState } from 'react';
import demoImg from './screenshot.png';

function UnityAlt() {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div
			className={`unityAlt container py-5 text-center ${
				isVisible ? 'fade-in' : ''
			}`}
		>
			<h3 className="text-light mb-4 title-animation">
				Experience Our 3D Demo
			</h3>

			<div className="displayBot">
				<img
					src={demoImg}
					// src="https://drive.google.com/file/d/1gjIy2tv1IEhYd_xmR-d4cwn4XCdid2Op/view?usp=drive_link"
					alt="Screenshot of workin AI demo"
				/>
				<div className="demoBrief">
					<p>
						You can interact with our AI bot and find out how it can
						help you realise your goals
					</p>
					<a href="https://webgl-trial.onrender.com/" target="_blank">
						Try it out
					</a>
				</div>
			</div>

			<p className="text-light mt-3 fade-in-description">
				Interact with the 3D model and explore the experience we've
				built for you!
			</p>
		</div>
	);
}

export default UnityAlt;
