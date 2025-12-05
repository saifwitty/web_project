import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import Subtitle from "../Shared/Subtitle";
import '../styles/About.css';
import worldImg from "../assets/images/world.png";
import logo1 from "../assets/images/logo1.png";
import Contact from "./Contact";
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="animated-about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="animated-background">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="letter">A</span>
            <span className="letter">b</span>
            <span className="letter">o</span>
            <span className="letter">u</span>
            <span className="letter">t</span>
            <span className="space"></span>
            <span className="letter">T</span>
            <span className="letter">o</span>
            <span className="letter">u</span>
            <span className="letter">r</span>
            <span className="space"></span>
            <span className="letter">G</span>
            <span className="letter">u</span>
            <span className="letter">i</span>
            <span className="letter">d</span>
            <span className="letter">e</span>
            <span className="space"></span>
            <p> </p>
            <span className="letter">B</span>
            <span className="letter">a</span>
            <span className="letter">n</span>
            <span className="letter">g</span>
            <span className="letter">l</span>
            <span className="letter">a</span>
            <span className="letter">d</span>
            <span className="letter">e</span>
            <span className="letter">s</span>
            <span className="letter">h</span>
          </h1>
          <p className="hero-subtitle">
            Discover the hidden gems, iconic heritage, and natural beauty of Bangladesh with us. 
            Your journey begins here.
          </p>
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrow-down"></div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content-section">
        <Container>
          <Row>
            <Col lg="3" md="6" className="mb-4">
              <div className="about-box">
                <div className="box-icon">
                  <div className="icon-bg"></div>
                  <span>🌍</span>
                </div>
                <h2>Who We Are</h2>
                <p>
                  Tour Guide Bangladesh is your one-stop travel companion. 
                  We connect you to the soul of Bangladesh—from lush green tea gardens 
                  in Sylhet to the serene beaches of Saint Martin and the historical 
                  elegance of Lalbagh Fort.
                </p>
              </div>
            </Col>
            
            <Col lg="3" md="6" className="mb-4">
              <div className="about-box">
                <div className="box-icon">
                  <div className="icon-bg"></div>
                  <span>🎯</span>
                </div>
                <h2>Our Mission</h2>
                <p>
                  To make travel in Bangladesh easy, inspiring, and unforgettable. 
                  We offer authentic information, stunning images, tour tips, 
                  and user-friendly tools to explore every corner of this beautiful country.
                </p>
              </div>
            </Col>
            
            <Col lg="3" md="6" className="mb-4">
              <div className="about-box">
                <div className="box-icon">
                  <div className="icon-bg"></div>
                  <span>🧭</span>
                </div>
                <h2>What We Offer</h2>
                <ul>
                  <li>✔ Detailed tour guides for top destinations</li>
                  <li>✔ Verified photos and travel reviews</li>
                  <li>✔ Custom travel planning and route suggestions</li>
                  <li>✔ Secure bookings and local contacts</li>
                </ul>
              </div>
            </Col>
            
            <Col lg="3" md="6" className="mb-4">
              <div className="about-box">
                <div className="box-icon">
                  <div className="icon-bg"></div>
                  <span>📸</span>
                </div>
                <h2>Explore More</h2>
                <p>
                  Check our gallery, read local blogs, and dive into the adventures waiting for you. 
                  Whether you're a backpacker, a family, or a solo traveler, 
                  we’ve got the perfect plan for you!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <Container>
          <div className="section-title">
            <h2>Meet Our <span className="highlight">Team</span></h2>
            <p>Passionate travelers dedicated to making your journey unforgettable</p>
          </div>
          
          <Row className="justify-content-center">
            
            <Col lg="4" md="6" className="mb-5">
            <Link to="https://saifwitty.github.io/1/" target="blank"><div className="profile-card">
                <div className="card-front">
                  <div className="profile-image">
                    <div className="image-border"></div>
                    <img src={profile1} alt="Saifur Rahman" />
                  </div>
                  <div className="profile-info">
                    <h3>Saifur Rahman</h3>
                    <p>CSE, SUST</p>
                  </div>
                </div>
                <div className="card-back">
                  <h3>Saifur Rahman</h3>
                  <p>Passionate about travel and connecting people with new experiences.</p>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div></Link>
              
            </Col>
            
            <Col lg="4" md="6" className="mb-5">
            <Link to="https://kemcho-0.github.io/Fahmid/">
             <div className="profile-card">
                <div className="card-front">
                  <div className="profile-image">
                    <div className="image-border"></div>
                    <img src={profile2} alt="Fahmid Hasan" />
                  </div>
                  <div className="profile-info">
                    <h3>Fahmid Hasan</h3>
                    <p>CSE, SUST</p>
                  </div>
                </div>
                <div className="card-back">
                  <h3>Fahmid Hasan</h3>
                  <p>Dedicated to making travel easy, safe, and memorable for everyone.</p>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>         
            </Link>
             
            </Col>
          </Row>
        </Container>
      </section>
      
      <Contact />
    </div>
  );
};

export default About;