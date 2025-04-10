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
    <>
      <div className="flex items-center justify-around mb-5 lg:mb-10">
        <button className="button-prev w-[60px] h-[60px] rounded-full bg-[#ff0000] grid place-content-center pe-1">
          <Button_icon />
        </button>
        <button className="button-next w-[60px] h-[60px] rounded-full bg-[#ff0000] grid place-content-center rotate-180 pe-1">
          <Button_icon />
        </button>
      </div>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={24}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        modules={[Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-w-[500px]">
            <h4 className="text-lg lg:text-xl mb-5 lg:mb-10">
              Safety and Compliance
            </h4>
            <ol className="flex flex-col gap-y-6">
              <li className="text-sm md:text-lg lg:text-lg">
                Full adherence to FMCSA and DOT standards
              </li>
              <li className="text-sm md:text-lg lg:text-lg">
                Comprehensive driver training programs and strict safety
                protocols
              </li>
            </ol>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[500px]">
            <h4 className="text-lg lg:text-xl mb-5 lg:mb-10">
              Advanced Technology
            </h4>
            <ol className="flex flex-col gap-y-6">
              <li className="text-sm md:text-lg lg:text-lg">
                Real-time tracking and GPS visibility powered by Samsara
              </li>
              <li className="text-sm md:text-lg lg:text-lg">
                Automated systems for billing and documentation, ensuring
                efficiency
              </li>
            </ol>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[500px]">
            <h4 className="text-lg lg:text-xl mb-5 lg:mb-10">
              Reliable Fleet
            </h4>
            <ol className="flex flex-col gap-y-6">
              <li className="text-sm md:text-lg lg:text-lg">
                Modern, well-maintained equipment for safe and dependable
                transport
              </li>
            </ol>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[500px]">
            <h4 className="text-lg lg:text-xl mb-5 lg:mb-10">
              Around-the-Clock Support
            </h4>
            <ol className="flex flex-col gap-y-6">
              <li className="text-sm md:text-lg lg:text-lg">
                A dedicated 24/7 Dispatch Department ready to assist with any
                needs
              </li>
            </ol>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[500px]">
            <h4 className="text-lg lg:text-xl mb-5 lg:mb-10">
              Highly Skilled Drivers
            </h4>
            <ol className="flex flex-col gap-y-6">
              <li className="text-sm md:text-lg lg:text-lg">
                Experienced professionals committed to delivering excellent
                service
              </li>
            </ol>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
