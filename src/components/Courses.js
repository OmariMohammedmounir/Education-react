import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${process.env.REACT_APP_API_URL}/api/courses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading courses...</h2>;
  }

  return (
    <>
      <Navbar />
      <div className="courses-container">
        <h1>Available Courses</h1>

        <div className="courses-grid">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <span className="course-level">{course.level}</span>
              <button className="btn-enroll">Enroll</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
