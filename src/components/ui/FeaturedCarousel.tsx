"use client";

import React, { useEffect } from "react";
import { Button_icon } from "../../../public/icons/Button_icon";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export const FeaturedCarousel = () => {
  useEffect(() => {
    setTimeout(() => {
      const prevButton = document.querySelector(".button-prev");
      const nextButton = document.querySelector(".button-next");

      if (prevButton && nextButton) {
        prevButton.classList.add("swiper-button-prev");
        nextButton.classList.add("swiper-button-next");
      }
    }, 100);
  }, []);

  return (
    <div className="px-5">
      <div className="flex items-center justify-around mb-5 lg:mb-10">
        <button className="button-prev w-[60px] h-[60px] rounded-full bg-[#ff0000] grid place-content-center pe-1">
          <Button_icon />
        </button>
        <button className="button-next w-[60px] h-[60px] rounded-full bg-[#ff0000] grid place-content-center rotate-180 pe-1">
          <Button_icon />
        </button>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        breakpoints={{
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h4 className="text-base lg:text-lg mb-5 lg:mb-10">
            Safety and Compliance
          </h4>
          <ol className={`ordered_list flex flex-col gap-y-6`}>
            <li className="text-sm lg:text-base">
              Full adherence to FMCSA and DOT standards
            </li>
            <li className="text-sm lg:text-base">
              Comprehensive driver training programs and strict safety protocols
            </li>
          </ol>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="text-base lg:text-lg mb-5 lg:mb-10">
            Advanced Technology
          </h4>
          <ol className={`ordered_list flex flex-col gap-y-6`}>
            <li className="text-sm lg:text-base">
              Real-time tracking and GPS visibility powered by Samsara
            </li>
            <li className="text-sm lg:text-base">
              Automated systems for billing and documentation, ensuring
              efficiency
            </li>
          </ol>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="text-base lg:text-lg mb-5 lg:mb-10">Reliable Fleet</h4>
          <ol className={`ordered_list flex flex-col gap-y-6`}>
            <li className="text-sm lg:text-base">
              Modern, well-maintained equipment for safe and dependable
              transport
            </li>
          </ol>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="text-base lg:text-lg mb-5 lg:mb-10">
            Around-the-Clock Support
          </h4>
          <ol className={`ordered_list flex flex-col gap-y-6`}>
            <li className="text-sm lg:text-base">
              A dedicated 24/7 Dispatch Department ready to assist with any
              needs
            </li>
          </ol>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="text-base lg:text-lg mb-5 lg:mb-10">
            Highly Skilled Drivers
          </h4>
          <ol className={`ordered_list flex flex-col gap-y-6`}>
            <li className="text-sm lg:text-base">
              Experienced professionals committed to delivering excellent
              service
            </li>
          </ol>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
