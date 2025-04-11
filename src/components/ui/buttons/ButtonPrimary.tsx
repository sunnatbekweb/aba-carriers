import React from "react";

type ButtonProps = {
  text: string;
};

export const ButtonPrimary: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="py-2.5 px-4 lg:py-3 lg:px-6 rounded-2xl bg-[#FF0000] border border-[#FF0000] text-base md:text-lg font-semibold text-white hover:bg-red-700 duration-300">
      {text}
    </button>
  );
};
