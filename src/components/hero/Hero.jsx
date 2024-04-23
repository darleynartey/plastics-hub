import React from "react";
import {Autoplay, Pagination,  } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import picture3 from "../../assets/picture3.jpg";
import plastic16 from "../../assets/picture16.jpg";
import picture from "../../assets/picture2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Hero = () => {
  return (
    <div name='home' className="w-full h-screen flex flex-col items-center relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination]}
        className="w-full h-full ml-auto mr-auto"
      >
        <SwiperSlide >
          <img
            className="block w-full h-full object-cover"
            src={picture3}
            alt="/"
          />
        </SwiperSlide>
        <SwiperSlide >
          <img
            className="block w-full h-full object-cover"
            src={plastic16}
            alt="/"
          />
        </SwiperSlide>
        <SwiperSlide >
          <img
            className="block w-full h-full object-cover"
            src={picture}
            alt="/"
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute top-0 bg-black/50 w-full h-full flex justify-center z-40">
        <div className="flex flex-col items-center justify-center md:items-center text-white w-3/5 mt-40 px-2 py-8 absolute top-20 text-center gap-5 z-0">
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Revolutionize Your Plastic Waste
          </h1>
          <p className="text-2xl">
            Turn scraps into cash with ease <br />
            at Plastics Hub
          </p>
          <button className="py-3 px-6 my-4 w-1/2">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
