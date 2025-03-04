import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SimpleFooter from './Pages/SimpleFooter';
import DemoNavbar from './Pages/DemoNavbar';
import HomePage from './Pages/HomePage';
import Body from './Pages/Body';
import UnityWebGLSection from './Pages/UnityWebGLSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			{/* <Route path="/" element={<Login />}></Route> */}
			<Route path="/" element={<App />}></Route>
		</Routes>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
