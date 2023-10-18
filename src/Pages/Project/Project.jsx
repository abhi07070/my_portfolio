import React from "react";
import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { project } from "../../components/Project";
import Fade from "react-reveal/Fade";
import img from "../../Images/dashboard.png";
import Blog from "../../Images/Blog.png";
import Ecommerce from "../../Images/ecommerce.png";

const Project = () => {
  return (
    <section className="section-bg">
      <div className="project-detail">
        <Fade bottom>
          <div className="header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>

            <h1>Projects</h1>
          </div>
          <div className="project-wrap">
            <div className="wrap">
              <h1>RetireExpert</h1>
              <img src={img} alt="" />
              <div className="btns">
                <a
                  href="https://github.com/abhi07070/MockUp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="github">
                    <i className="bx bxl-github"></i>
                  </div>
                </a>

                <a
                  href="https://abhi07070.github.io/MockUp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="demo demo-btn">
                    <i className="bx bx-right-arrow-alt"></i>
                    <span>Demo</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="wrap">
              <h1>Blog Application</h1>
              <img src={Blog} alt="" />
              <div className="btns">
                <a
                  href="https://github.com/abhi07070/Mern_blog-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="github">
                    <i className="bx bxl-github"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="wrap">
              <h1>E-commerce Application</h1>
              <img src={Ecommerce} alt="" />
              <div className="btns">
                <a
                  href="https://github.com/abhi07070/E-commerce-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="github">
                    <i className="bx bxl-github"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Project;
