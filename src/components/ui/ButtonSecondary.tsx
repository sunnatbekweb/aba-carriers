import React from "react";

type ButtonProps = {
  text: string;
};

export const ButtonSecondary: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="py-3 px-6 rounded-2xl text-base md:text-xl lg:text-2xl font-semibold border-2 border-white text-white hover:bg-white hover:text-black duration-300">
      {text}
    </button>
  );
};
