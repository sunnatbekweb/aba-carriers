"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModalProps } from "@/types";
import React, { useEffect } from "react";

export const NavModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const path = usePathname();

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
      } nav_modal`}
    >
      <nav
        className={`${
          isOpen ? "scale-100" : "scale-75"
        } duration-300 flex items-center justify-center h-full brigendsExpanded`}
      >
        <ul
          className={
            "flex flex-col items-center gap-y-6 md:gap-y-14 lg:gap-y-20 max-w-[725px] mx-auto px-5 lg:px-0"
          }
        >
          <li className={"flex justify-center"}>
            <Link
              href={"/"}
              className={`text-xl md:text-3xl lg:text-4xl uppercase text-center ${
                path === "/" ? "text-[#ff0000]" : "text-white"
              }`}
            >
              Home
            </Link>
          </li>
          <li className={"flex justify-center"}>
            <Link
              href={"/carriers"}
              className={`text-xl md:text-3xl lg:text-4xl uppercase text-center ${
                path === "/carriers" ? "text-[#ff0000]" : "text-white"
              }`}
            >
              WHY ABA CARRIERS
            </Link>
          </li>
          <li className={"flex justify-center"}>
            <Link
              href={"/drive"}
              className={`text-xl md:text-3xl lg:text-4xl uppercase text-center ${
                path === "/drive" ? "text-[#ff0000]" : "text-white"
              }`}
            >
              Drive for aba
            </Link>
          </li>
          <li className={"flex justify-center"}>
            <Link
              href={"/services"}
              className={`text-xl md:text-3xl lg:text-4xl uppercase text-center ${
                path === "/services" ? "text-[#ff0000]" : "text-white"
              }`}
            >
              ABA SERVICES
            </Link>
          </li>
          <li className={"flex justify-center"}>
            <Link
              href={"/about"}
              className={`text-xl md:text-3xl lg:text-4xl uppercase text-center ${
                path === "/about" ? "text-[#ff0000]" : "text-white"
              }`}
            >
              ABOUT ABA CARRIERS INC
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
