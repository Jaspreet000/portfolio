import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Jaspreet Singh</span>
            <br />
            Full Stack Developer
          </h1>

          <p className="home__description">
            An aspiring full stack developer specializing in the MERN stack
            (MongoDB, Express.js, React, Node.js), I am dedicated to creating
            dynamic, responsive, and user-friendly web applications. My journey
            in web development has been driven by a passion for coding and a
            continuous quest for learning new technologies.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              {" "}
              <FaArrowRight />{" "}
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default home;
