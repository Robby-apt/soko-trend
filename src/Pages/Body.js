import React from 'react';

const Body = () => {
  return (
    <div className="bg-dark text-light py-5">
      {/* Introduction Section */}
      <section className="container text-center py-5">
        <h2>More About Our Company</h2>
        <p className="lead">We seek to solve the cost of influencer marketing which is currently high and unattainable for small businesses whose marketing budget is significantly smaller than the established brands. The rising growth of the internet economy means any business that wants to increase visibility and improve sales must find traction in the digital space, hence the essence of using (an) influencer(s) as (a) marketing tool(s).
</p>
        <a href="#services" className="btn btn-light">Learn More About Us</a>
      </section>

      {/* Services Section */}
      <section id="services" className="container py-5">
        <h3 className="text-center mb-4">Our Services</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-secondary text-light mb-4">
              <div className="card-body">
                <h5 className="card-title">AI services</h5>
                <p className="card-text">You can interact with our ai services</p>
                <a href="#learnMore" className="btn btn-outline-light">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-secondary text-light mb-4">
              <div className="card-body">
                <h5 className="card-title">UI/UX Design</h5>
                <p className="card-text">We design user-friendly interfaces that are both functional and aesthetically pleasing.</p>
                <a href="#learnMore" className="btn btn-outline-light">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-secondary text-light mb-4">
              <div className="card-body">
                <h5 className="card-title">SEO Optimization</h5>
                <p className="card-text">We optimize websites to rank higher in search engines, ensuring better visibility.</p>
                <a href="#learnMore" className="btn btn-outline-light">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-dark text-light text-center py-5">
        <h3>In need of our Services?</h3>
        <p>Contact us today.</p>
        <a href="#contact" className="btn btn-light">Contact Us</a>
      </section>

      {/* Testimonials Section */}
      <section className="container py-5">
        <h3 className="text-center mb-4">What Our Clients Say</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="card bg-secondary text-light mb-4">
              <div className="card-body">
                <p className="card-text">"They did an amazing job with our website! Highly recommend their services."</p>
                <footer className="blockquote-footer text-light">Jane Doe, CEO of Company X</footer>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-secondary text-light mb-4">
              <div className="card-body">
                <p className="card-text">"The team was professional and delivered on time. We love our new site!"</p>
                <footer className="blockquote-footer text-light">John Smith, Founder of Startup Y</footer>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Content Section */}
     <section id="content" className="container py-5">
  <div className="row">
    <div className="col-lg-4">
      <div className="card bg-secondary text-light mb-4">
        <div className="card-body text-center">
          {/* Round Image */}
          <img
            src="profile.jpg"  // Replace with your actual image path
            alt="Partner 1"
            className="rounded-circle mb-3"
            style={{ width: '100px', height: '100px' }} // Set size of the round image
          />
          <h5 className="card-title">Partner 1</h5>
          <p className="card-text">Meet our Manager</p>
          <a href="#" className="btn btn-outline-light">LinkedIn Profile</a>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card bg-secondary text-light mb-4">
        <div className="card-body text-center">
          {/* Round Image */}
          <img
            src="profile.jpg"  // Replace with your actual image path
            alt="Partner 2"
            className="rounded-circle mb-3"
            style={{ width: '100px', height: '100px' }} // Set size of the round image
          />
          <h5 className="card-title">Partner 2</h5>
          <p className="card-text">CEO</p>
          <a href="#" className="btn btn-outline-light">LinkedIn Profile</a>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card bg-secondary text-light mb-4">
        <div className="card-body text-center">
          {/* Round Image */}
          <img
            src="profile.jpg"  // Replace with your actual image path
            alt="Partner 3"
            className="rounded-circle mb-3"
            style={{ width: '100px', height: '100px' }} // Set size of the round image
          />
          <h5 className="card-title">Partner 3</h5>
          <p className="card-text">COO</p>
          <a href="#" className="btn btn-outline-light">LinkedIn Profile</a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Body;
