/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
      <footer className="bg-dark text-light py-4 mt-auto">
  <div className="container">
    <div className="row">
      {/* About Section */}
      <div className="col-md-4">
        <h5>About Us</h5>
        <p>We are a team of passionate developers dedicated to creating modern and user-friendly web experiences.</p>
      </div>
      
      {/* Quick Links */}
      <div className="col-md-4">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-light text-decoration-none">Back to Top</a></li>
          <li><a href="#ai" className="text-light text-decoration-none">AI</a></li>
          <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
        </ul>
      </div>
      
      {/* Social Media Links */}
      <div className="col-md-4">
        <h5>Follow Us</h5>
        <div>
          <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i> Facebook</a><br />
          <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i> Twitter</a><br />
          <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i> Instagram</a>
        </div>
      </div>
    </div>
  </div>

  <div className="text-center mt-4">
    <p>&copy; All rights reserved.</p>
  </div>
</footer>

      </>
    )  
    }
}

export default SimpleFooter;
