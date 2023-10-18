import React from "react";
import Fade from "react-reveal/Fade";
import { clinetData } from "./ClientData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ProjectWithClients.css";
import { Autoplay } from "swiper/modules";

const ProjectWithClients = () => {
  return (
    <section className="section-bg">
      <div className="project-client-detail">
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

            <h1>Clients Project</h1>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Autoplay]}
            effect="fade"
            speed={500}
            className="mySwiper"
          >
            <div className="client-project-wrap">
              {clinetData.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="wrap swiper-slide">
                    <>
                      <h1>{data.header}</h1>
                      <img src={data.img} alt="" />
                      <button className="live-btn">Live View</button>
                      {/* <div className="btns">
                        <a
                          href="https://abhi07070.github.io/MockUp/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="demo demo-btn">
                            <span>Live</span>
                            <i class="bx bx-right-arrow-alt"></i>
                          </div>
                        </a>
                      </div> */}
                    </>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </Fade>
      </div>
    </section>
  );
};

export default ProjectWithClients;
