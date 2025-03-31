"use client";

import React from "react";
import { Button_icon } from "../../../public/icons/Button_icon";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export const FeaturedCarousel = () => {
  return (
    <>
      <div className="flex items-center justify-around mb-5 lg:mb-10">
        <button className="w-[60px] h-[60px] rounded-full bg-[#ff0000] grid place-content-center pe-1">
          <Button_icon />
        </button>
        <button className="w-[60px] h-[60px] rounded-full bg-[#ff0000] grid place-content-center rotate-180 pe-1">
          <Button_icon />
        </button>
      </div>
      <Swiper
        navigation={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={24}
        modules={[Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[552px]">
            <h4 className="text-xl lg:text-2xl xl:text-3xl mb-16 lg:mb-10">
              Safety and Compliance
            </h4>
            <ol className="flex flex-col gap-y-12">
              <li className="text-lg lg:text-2xl">
                Full adherence to FMCSA and DOT standards
              </li>
              <li className="text-lg lg:text-2xl">
                Comprehensive driver training programs and strict safety
                protocols
              </li>
            </ol>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[552px]">
            <h4 className="text-xl lg:text-2xl xl:text-3xl mb-16 lg:mb-10">
              Advanced Technology
            </h4>
            <ol className="flex flex-col gap-y-12">
              <li className="text-lg lg:text-2xl">
                Real-time tracking and GPS visibility powered by Samsara
              </li>
              <li className="text-lg lg:text-2xl">
                Automated systems for billing and documentation, ensuring
                efficiency
              </li>
            </ol>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[552px]">
            <h4 className="text-xl lg:text-2xl xl:text-3xl mb-16 lg:mb-10">
              Reliable Fleet
            </h4>
            <ol className="flex flex-col gap-y-12">
              <li className="text-lg lg:text-2xl">
                Modern, well-maintained equipment for safe and dependable
                transport
              </li>
            </ol>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[552px]">
            <h4 className="text-xl lg:text-2xl xl:text-3xl mb-16 lg:mb-10">
              Around-the-Clock Support
            </h4>
            <ol className="flex flex-col gap-y-12">
              <li className="text-lg lg:text-2xl">
                A dedicated 24/7 Dispatch Department ready to assist with any
                needs
              </li>
            </ol>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[552px]">
            <h4 className="text-xl lg:text-2xl xl:text-3xl mb-16 lg:mb-10">
              Highly Skilled Drivers
            </h4>
            <ol className="flex flex-col gap-y-12">
              <li className="text-lg lg:text-2xl">
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
