"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";

const ParallaxAutoplay = () => {
  return (
    <div className="relative w-full h-[500px]">
      <Swiper
        modules={[Parallax, Pagination, Autoplay]}
        speed={2500}
        parallax={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="h-full"
      >
        {/* Background Parallax Image */}
        <div
          slot="container-start"
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          data-swiper-parallax="-23%"
          style={{
            backgroundImage: "url('/your-image.jpg')",
          }}
        ></div>

        {/* Slide 1 */}
        <SwiperSlide className="bg-base-100">
          <div className="text-white p-10">
            <h2 data-swiper-parallax="-100" className="text-4xl font-bold">
              Slide 1 Title
            </h2>

            <p data-swiper-parallax="-200" className="text-lg mt-2 opacity-80">
              This is the subtitle
            </p>

            <p
              data-swiper-parallax="-300"
              data-swiper-parallax-duration="600"
              className="mt-4 max-w-md"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              culpa aut fuga impedit.
            </p>

            <div data-swiper-parallax-opacity="0.5" className="mt-4">
              This text fades opacity
            </div>

            <div data-swiper-parallax-scale="0.15" className="mt-2">
              This text scales during slide change
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="bg-base-100">
          <div className="text-white p-10">
            <h2 data-swiper-parallax="-100" className="text-4xl font-bold">
              Slide 2 Title
            </h2>
            <p data-swiper-parallax="-200" className="text-lg mt-2 opacity-80">
              Another subtitle
            </p>
            <p
              data-swiper-parallax="-300"
              data-swiper-parallax-duration="600"
              className="mt-4 max-w-md"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              vitae modi provident.
            </p>
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
         <SwiperSlide className="bg-base-100">
          <div className="text-white p-10 ">
            <h2 data-swiper-parallax="-100" className="text-4xl font-bold">
              Slide 3 Title
            </h2>
            <p data-swiper-parallax="-200" className="text-lg mt-2 opacity-80">
              Another subtitle
            </p>
            <p
              data-swiper-parallax="-300"
              data-swiper-parallax-duration="600"
              className="mt-4 max-w-md"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              vitae modi provident.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ParallaxAutoplay;
