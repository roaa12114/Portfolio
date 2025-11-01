import React from "react";
import "./about.css";
import aboutImg from "../assests/images/Untitled-1.jpg"; // غيّري المسار حسب الصورة بتاعتك

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">

        {/* الصورة والخط */}
        <div className="about-image-wrapper">
          <img src={aboutImg} alt="About Me" className="about-image" />
          <div className="horizontal-line"></div>
        </div>

        {/* العنوان */}
        <h1 className="about-title">Hi, I am Roaa</h1>
        <h3 className="sub-title">Full-Stack & Web Developer</h3>

        {/* البوكس اللي فيه الكلام */}
        <div className="about-text-box">
          <p>
            A passionate Full-Stack Web Developer specializing in React, Node.js, Express.js, and MongoDB, with additional experience in Next.js. I focus on crafting clean, responsive, and scalable web applications that combine strong functionality with elegant design.
Graduated in Computer Science and Engineering from the University of Debrecen (Hungary), I’ve developed a solid foundation in performance optimization, cross-browser compatibility, and Agile development practices. My experience includes remote collaboration with international teams, secure authentication integration, and effective database management for both relational and non-relational systems.
I’m deeply motivated by creating innovative, user-centered platforms that enhance digital interaction and deliver seamless user experiences.
          </p>
        </div>

        {/* الفاصل بين الصفحات */}
        <div className="page-divider"></div>
      </div>
    </section>
  );
}

export default About;
