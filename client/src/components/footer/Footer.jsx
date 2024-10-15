import React from 'react'
import { SocialIcon } from 'react-social-icons'
import classes from './footer.module.css'


function Footer() {
  return (
    <div style={{ width: '100%', height: '350px' }} className={classes.footer}>
      <div className="footer-div d-flex justify-content-evenly flex-wrap w-100">
        <div className="website" style={{ width: '400px' }}>
          <h4 className={classes.color}><i class="fa-solid fa-house-building"></i>RAAZ PROPERTY</h4>
          <h6 className={classes.color}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident possimus libero iure rerum rem nihil</h6>
          <h6 className={classes.color}>Code Licensed MIT ,dose CC BY 3.0</h6>
          <p>Current Version v1.0.6</p>
        </div>
        <div className="links d-flex flex-column">
        <h4 className={classes.color}>Services</h4>
          <span>Marketing</span>
          <span>Designing</span>
          <span>Advertisement</span>
        </div>
        <div className={classes.loc}>
          <h4 className={classes.color}>Location</h4>
          <span>India</span>
          <span>Dubai</span>
          <span>London</span>
        </div>
        <div className="content">
          <h4 className={classes.color}>Contacts</h4>
          <span>Phone: +91 9633557272</span>
          <div className={classes.col}>
          <SocialIcon url="https://twitter.com"></SocialIcon>
            <SocialIcon url="https://www.facebook.com/"></SocialIcon>
            <SocialIcon url="https://instagram.com"></SocialIcon>
            <SocialIcon url="https://www.linkedin.com/"></SocialIcon>
          </div>
        </div>

      </div>
      <p>Copyright @ 2023 Raaz Property. Build with React</p>
    </div>
  )
}

export default Footer