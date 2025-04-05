"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function TruckImages() {
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const offsets = [350, 175, 0];

  useEffect(() => {
    imagesRef.current.forEach((img, index) => {
      if (img) {
        gsap.fromTo(
          img,
          { opacity: 1, x: 960 },
          {
            opacity: 1,
            x: offsets[index],
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
              end: "top 30%",
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 mt-20">
      {offsets.map((_, index) => (
        <Image
          key={index}
          ref={(el) => {
            imagesRef.current[index] = el;
          }}
          src="/images/truck.svg"
          width={800}
          height={160}
          alt="Truck"
          className="opacity-0"
        />
      ))}
    </div>
  );
}
