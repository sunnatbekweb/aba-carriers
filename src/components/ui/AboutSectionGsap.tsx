"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export const AboutSectionGsap = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          ScrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <Image
      src={"/icons/about_logo.svg"}
      width={640}
      height={380}
      ref={imageRef}
      className="w-[220px] h-auto md:w-[310px] xl:w-[640px] absolute top-[50%] left-[50%] -translate-1/2 z-20"
      alt="Carriers section image"
    />
  );
};
