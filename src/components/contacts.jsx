import React from "react";
import "./contact.css";
import bgImg from "../assests/images/contactBg.jpg"; // غيّري الصورة دي حسب ما تحبي

function Contact() {
  return (
    <div id="contact" className="contact-page" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="dark-overlay">
        <div className="contact-box">
          <h1>Contact <span>Me</span></h1>

          <div className="contact-info">
            {/* Phone */}
            <div className="contact-item">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+2015058227970">+201505822797</a>
            </div>
            {/* Email */}
            <div className="contact-item">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:hello@reallygreatsite.com">roaa12114@gmail.com</a>

            </div>
            {/* GitHub */}
            <div className="contact-item">
              <i className="fa-brands fa-github"></i>
              <a
                href="https://github.com/roaa12114"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/roaa12114
              </a>
            </div>
            
            {/* LinkedIn */}
            <div className="contact-item">
              <i className="fa-brands fa-linkedin"></i>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/yourusername
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
