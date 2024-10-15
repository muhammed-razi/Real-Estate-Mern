import React from 'react';
import './About.css'; 

const About = () => {
  
  return (
    <div className="about-page">
      <div className="about-header">
        <h2>About Us</h2>
        <p>Welcome to our premier real estate platform where your dream property becomes a reality.</p>
      </div>

      <div className="mission-section">
        <h3>Our Mission</h3>
        <p>
          At RAAZ Real Estate, we are on a mission to redefine the real estate experience. We aim to empower our
          clients with the knowledge and resources needed to make informed decisions and find their perfect home.
        </p>
      </div>

      <div className="team-section">
        <h3>Meet Our Team</h3>
        <div className="team-member">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTylExDj9J4cWVEF4gPb9bpiHinbNI07d7jtA&usqp=CAU" alt="John Doe" />
          <div>
            <p className="team-member-name">John Doe</p>
            <p className="team-member-role">Founder</p>
          </div>
        </div>

        <div className="team-member">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSY1UADg7bn5TY3f1UIz9JjfeV9RjRjWH8RQ&usqp=CAU" alt="Jane Smith" />
          <div>
            <p className="team-member-name">Jane Smith</p>
            <p className="team-member-role">Real Estate Agent</p>
          </div>
        </div>

        <div className="team-member">
          <img src="data:image/jpeg;base64,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" alt="Bob Johnson" />
          <div>
            <p className="team-member-name">Bob Johnson</p>
            <p className="team-member-role">Property Manager</p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h3>Contact Us</h3>
        <p>Have questions or need assistance? Feel free to reach out to our dedicated team:</p>
        <p>Email: info@raazrealestate.com</p>
        <p>Phone: +91 9633557272</p>
      </div>
    </div>
  );
};

export default About;
