import React from "react";
import "./CourseList.css";
import mathImg from "../assets/logo.png";
import scienceImg from "../assets/logo.png";
import historyImg from "../assets/logo.png";
import programmingImg from "../assets/logo.png";
import "./Testimonial.css";

const courses = [
  { title: "Mathematics", level: "Beginner", img: mathImg },
  { title: "Science", level: "Intermediate", img: scienceImg },
  { title: "History", level: "Advanced", img: historyImg },
  { title: "Programming", level: "Beginner", img: programmingImg },
];

const CourseList = () => {
  return (
    
    <div className="course-grid">
             
      {courses.map((course, index) => (
        
        <div className="course-card" key={index}>
          <img src={course.img} alt={course.title} />
          <div className="course-info">
            <h3>{course.title}</h3>
            <p>{course.level}</p>
            <button>Enroll</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
