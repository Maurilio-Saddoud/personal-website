import React from "react";
import Slider from "react-slick";
import { testimonials } from "../data/dummydata";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heading } from "../common/Heading";

export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="testimonials hero">
        <div className="container">
          <Heading title="Testimonials" />
          <Slider {...settings}>
            {testimonials.map((val) => (
              <div className="box">
                <div className="quotation" data-aos="zoom-out-up">
                  <FormatQuoteIcon />
                </div>
                <p className="text" data-aos="zoom-out-down">{val.text}</p>
                <div className="img" data-aos="zoom-out-right">
                  <img src={val.image} alt="" />
                </div>
                <h3 className="name" data-aos="zoom-out-left">{val.name}</h3>
                <label data-aos="zoom-out">{val.post}</label>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
