import React from "react";
import "./Testimonial.css";

const testimonials = [
  { name: "Alice", feedback: "This platform helped me ace my exams!" },
  { name: "Bob", feedback: "Easy to use and very informative courses." },
  { name: "Carol", feedback: "I learned programming in just 2 months!" },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Our Students Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-feedback">"{t.feedback}"</p>
            <h4 className="testimonial-name">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
