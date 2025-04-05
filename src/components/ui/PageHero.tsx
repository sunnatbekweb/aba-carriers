import React from "react";
import { HeroProps } from "@/types";

export const PageHero: React.FC<HeroProps> = ({ url, title }) => {
  return (
    <section
      className={`h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center px-5`}
      style={{ backgroundImage: `url(${url})` }}
    >
      <h2
        className={
          "brigendsExpanded text-4xl md:text-[40px] lg:text-[60px] text-center text-white"
        }
      >
        {title}
      </h2>
    </section>
  );
};
