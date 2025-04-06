"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const ServiceSectionGsap = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 1, scale: 0.2, x: 490 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          ease: "power2.out",
          scrollTrigger: {
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
      src="/images/American-Truck.png"
      width={1080}
      height={834}
      ref={imageRef}
      className="absolute top-[60px] md:top-[120px] -right-6 md:-right-12"
      alt="Section truck image"
    />
  );
};
