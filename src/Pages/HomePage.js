import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'; // Import the custom CSS file for animations

const HomePage = () => {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column heroSection">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Soko Trend</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
               <li className="nav-item">
                <a className="nav-link active" href="#ai">Ai</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-5">
        <h1>Welcome to Our Website</h1>
        <p>Your favorite place on the web.</p>
        <a href="#content" className="btn btn-light btn-hover-expand">Explore More</a>
      </header>

      {/* About Us Section (Without Heading) */}
      <section id="about" className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="lead text-center slide-in">
              A digital platform that effectively breaks the gatekeeping trend by marketing agencies and gives budding creators an opportunity to access business brands seeking partnerships
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
