import React from "react";

type ButtonProps = {
  text: string;
};

export const ButtonSecondary: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="py-3 px-6 rounded-2xl border-2 border-white text-white">
      {text}
    </button>
  );
};
