import React from "react";
import Info from "../../components/Info";
import { FaDownload } from "react-icons/fa";
import "./About.css";
import Skills from "../../components/Skills";
import { resume } from "../../data";
import CV from "../../assets/Resume.pdf";
import Resumeitem from "../../components/Resumeitem";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section_title">
          About <span>Me</span>
        </h2>

        <div className="about_container grid">
          <div className="about_info">
            <h3 className="section_subtitle">Personal Infos</h3>

            <ul className="info_list grid">
              <Info />
            </ul>

            <a href={CV} className="button btn-margin">
              Download CV{" "}
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>
          {/* <div className="stats grid">
            <Stats />
          </div> */}
          <div className="stats">
            <p className="stats__p">
              I am an aspiring full stack developer specializing in the MERN
              stack (MongoDB, Express.js, React, Node.js). My passion for coding
              and continuous learning drives me to create dynamic, responsive,
              and user-friendly web applications.
            </p>
            <p className="stats__p">Currently, I am enhancing my skill set with Next.js, which allows me to build server-rendered React applications with superior performance. With a strong foundation in both front-end and back-end development, I am committed to staying updated with the latest industry trends. This dedication empowers me to tackle complex challenges and contribute effectively to innovative projects.</p>
          </div>
        </div>
      </section>
      <div className="separator"></div>

      <section className="skills">
        <h3 className="section_subtitle subtitle__center">My Skills</h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section_subtitle subtitle__center">
          Experience & Education
        </h3>

        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <Resumeitem key={val.id} {...val} />;
              }
            })}
          </div>

          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "education") {
                return <Resumeitem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
