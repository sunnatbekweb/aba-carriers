import React, { useEffect } from "react";
import { ModalProps } from "@/types";

export const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <div
      onClick={onClose}
      className={`${
        isOpen ? "opacity-100 visible" : "opacity-0 collapse"
      } nav_modal flex justify-center items-center`}
    >
      <ul
        className={`${
          isOpen ? "scale-100" : "scale-75"
        } contact_modal grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-white duration-300`}
      >
        <div className="hidden md:block absolute w-0.5 left-1/2 -translate-x-1/2 h-full xl:w-full xl:h-0.5 xl:top-1/2 xl:-translate-y-1/2 bg-[#ff0000]"></div>
        <li
          className={
            "flex flex-col border-b-2 border-[#ff0000] md:border-none text-center xl:text-left gap-y-4 md:gap-y-8 px-6 py-5 md:px-12 md:py-10 xl:px-24 xl:py-14"
          }
        >
          <h4 className={"text-xl lg:text-[40px] font-bold"}>Main</h4>
          <a
            href={"tel:+16822915555"}
            className={"text-base lg:text-[26px] font-semibold"}
          >
            +1 682-291-5555
          </a>
        </li>
        <li
          className={
            "flex flex-col border-b-2 border-[#ff0000] md:border-none text-center xl:text-left gap-y-4 md:gap-y-8 px-6 py-5 md:px-12 md:py-10 xl:px-24 xl:py-14"
          }
        >
          <h4 className={"text-xl lg:text-[40px] font-bold"}>Hiring</h4>
          <a
            href={"tel:+12404498888"}
            className={"text-base lg:text-[26px] font-semibold"}
          >
            +1 240-449-8888
          </a>
        </li>
        <li
          className={
            "flex flex-col border-b-2 border-[#ff0000] md:border-none text-center xl:text-left gap-y-4 md:gap-y-8 px-6 py-5 md:px-12 md:py-10 xl:px-24 xl:py-14"
          }
        >
          <h4 className={"text-xl lg:text-[40px] font-bold"}>Dispatch</h4>
          <a
            href={"tel:+16103335555"}
            className={"text-base lg:text-[26px] font-semibold"}
          >
            +1 610-333-5555
          </a>
        </li>
        <li
          className={
            "flex flex-col border-b-2 border-[#ff0000] md:border-none text-center xl:text-left gap-y-4 md:gap-y-8 px-6 py-5 md:px-12 md:py-10 xl:px-24 xl:py-14"
          }
        >
          <h4 className={"text-xl lg:text-[40px] font-bold"}>Accounting</h4>
          <a
            href={"tel:+17712104444"}
            className={"text-base lg:text-[26px] font-semibold"}
          >
            +1 771-210-4444
          </a>
        </li>
        <li
          className={
            "flex flex-col border-b-2 border-[#ff0000] md:border-none text-center xl:text-left gap-y-4 md:gap-y-8 px-6 py-5 md:px-12 md:py-10 xl:px-24 xl:py-14"
          }
        >
          <h4 className={"text-xl lg:text-[40px] font-bold"}>Fleet</h4>
          <a
            href={"tel:+15028053333"}
            className={"text-base lg:text-[26px] font-semibold"}
          >
            +1 502-805-3333
          </a>
        </li>
        <li
          className={
            "flex flex-col border-b-2 border-[#ff0000] md:border-none text-center xl:text-left gap-y-4 md:gap-y-8 px-6 py-5 md:px-12 md:py-10 xl:px-24 xl:py-14"
          }
        >
          <h4 className={"text-xl lg:text-[40px] font-bold"}>Safety</h4>
          <a
            href={"tel:+16674071111"}
            className={"text-base lg:text-[26px] font-semibold"}
          >
            +1 667-407-1111
          </a>
        </li>
      </ul>
    </div>
  );
};
