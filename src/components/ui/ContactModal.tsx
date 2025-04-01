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
        } contact_modal grid grid-cols-3 text-white duration-300`}
      >
        <li className={"flex flex-col gap-y-8 px-24 py-14"}>
          <h4 className={"text-[40px] font-bold"}>Hiring</h4>
          <a href={"tel:+12404498888"} className={"text-[26px] font-semibold"}>
            +1 240-449-8888
          </a>
        </li>
        <li className={"flex flex-col gap-y-8 px-24 py-14"}>
          <h4 className={"text-[40px] font-bold"}>Dispatch</h4>
          <a href={"tel:+16103335555"} className={"text-[26px] font-semibold"}>
            +1 610-333-5555
          </a>
        </li>
        <li className={"flex flex-col gap-y-8 px-24 py-14"}>
          <h4 className={"text-[40px] font-bold"}>Accounting</h4>
          <a href={"tel:+17712104444"} className={"text-[26px] font-semibold"}>
            +1 771-210-4444
          </a>
        </li>
        <li className={"flex flex-col gap-y-8 px-24 py-14"}>
          <h4 className={"text-[40px] font-bold"}>Fleet</h4>
          <a href={"tel:+15028053333"} className={"text-[26px] font-semibold"}>
            +1 502-805-3333
          </a>
        </li>
        <li className={"flex flex-col gap-y-8 px-24 py-14"}>
          <h4 className={"text-[40px] font-bold"}>Safety</h4>
          <a href={"tel:+16674071111"} className={"text-[26px] font-semibold"}>
            +1 667-407-1111
          </a>
        </li>
        <li className={"flex flex-col gap-y-8 px-24 py-14"}>
          <h4 className={"text-[40px] font-bold"}>Owner</h4>
          <a href={"tel:+15138998888"} className={"text-[26px] font-semibold"}>
            +1 513 899 8888
          </a>
        </li>
      </ul>
    </div>
  );
};
