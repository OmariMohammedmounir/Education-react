import React from "react";
import Navbar from "./Navbar";
import CourseList from "./CourseList";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      <header className="hero">
        <div className="hero-text">
          <h1>Learn, Grow, Succeed</h1>
          <p>
            Access top courses and resources to boost your knowledge and
            advance your career.
          </p>
          <button className="btn-get-started">Get Started</button>
        </div>
      </header>

      <section className="courses-section">
        <h2>Featured Courses</h2>
        <CourseList />
      </section>

      <section className="testimonials-section">
        <h2>What Our Students Say</h2>
        <Testimonial />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
