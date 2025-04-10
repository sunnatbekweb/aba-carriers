"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const AboutSectionGsap = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      gsap.fromTo(
        wrapperRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-[220px] h-auto md:w-[310px] xl:w-[640px] absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-20"
    >
      <Image
        src={"/icons/about_logo.svg"}
        width={640}
        height={380}
        alt="Carriers section image"
        className="w-full h-auto"
      />
    </div>
  );
};
