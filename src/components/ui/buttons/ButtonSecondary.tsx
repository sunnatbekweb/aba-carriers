import React from "react";

type ButtonProps = {
  text: string;
};

export const ButtonSecondary: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="py-2.5 px-4 lg:py-3 lg:px-6 rounded-2xl text-base md:text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-black duration-300">
      {text}
    </button>
  );
};
