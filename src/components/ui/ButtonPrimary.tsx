import React from "react";

type ButtonProps = {
  text: string;
};

export const ButtonPrimary: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="py-3 px-6 rounded-2xl bg-[#FF0000] text-base md:text-xl lg:text-2xl font-semibold text-white hover:bg-red-700 duration-300">
      {text}
    </button>
  );
};
