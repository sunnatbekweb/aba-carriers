import React from "react";
import { HeroProps } from "@/types";
import Image from "next/image";

export const PageHero: React.FC<HeroProps> = ({ url, title }) => {
  return (
    <section
      className={`h-screen relative flex items-center justify-center px-5`}
    >
      <Image
        src={url}
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
        alt="Hero background image"
      />
      <h2
        className={
          "brigendsExpanded text-2xl md:text-[28px] lg:text-[36px] text-center text-white"
        }
      >
        {title}
      </h2>
    </section>
  );
};
