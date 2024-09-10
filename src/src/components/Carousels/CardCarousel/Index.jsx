import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Scrollbar } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./style.css";

import { Grid } from "@mui/material";
import { Arrow_Buttons } from "../..";

export default function Index({ image }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="carousel-container1 ">
      <Swiper
        ref={swiperRef}
        slidesPerView={1.5}
        loop={true}
        spaceBetween={30}
        scrollbar={true}
        grabCursor={true}
        pagination={false}
        modules={[Pagination]}
        breakpoints={{
          // Breakpoints for different screen sizes

          576: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4.5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper1"
        onSlideChange={(swiper) =>
          setActiveIndex(swiper.realIndex % image.length)
        }
      >
        {image.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`swiper-slide ${
              index === activeIndex ? "active-slide" : ""
            }`}
          >
            <img
              src={item.imageUrl}
              alt={`Slide ${index}`}
              className={`carousel-image ${
                index === activeIndex ? "active-image" : ""
              }`}
            />
            <div className="card-content">
              <h5>{item.title}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Grid sx={{ marginY: "20px" }} container>
        <Grid item xs={6} md={9}>
          <div className="buttons-group">
            <Arrow_Buttons onClick={handlePrevClick}>
              <FaArrowLeft />
            </Arrow_Buttons>
            <Arrow_Buttons onClick={handleNextClick}>
              <FaArrowRight />
            </Arrow_Buttons>
          </div>
        </Grid>
        <Grid item xs={6} md={3}>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "end",
            }}
          >
            <h3>
              <span
                style={{ fontWeight: "bold", fontSize: "20px", color: "black" }}
              >
                06
              </span>
              <span
                style={{ fontWeight: "bold", fontSize: "25px", color: "black" }}
              >
                /
              </span>
              <span
                style={{ fontWeight: "bold", fontSize: "25px", color: "black" }}
              >{`0${activeIndex}`}</span>
            </h3>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
