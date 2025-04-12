"use client";

import React, { useEffect } from "react";
import { Button_icon } from "../../../public/icons/Button_icon";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { SlideData } from "@/data";

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
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {SlideData.map((item, index) => (
          <SwiperSlide key={index}>
            <h4 className="text-base lg:text-lg mb-5 lg:mb-10">{item.title}</h4>
            <ol className={`ordered_list flex flex-col gap-y-6`}>
              {item.list.map((point, index) => (
                <li key={index} className="text-sm lg:text-base">
                  {point}
                </li>
              ))}
            </ol>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
