"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import {navModalProps} from "@/types";
import React from "react";

export const NavModal: React.FC<navModalProps> = ({isOpen, onClose}) => {
    const path = usePathname()

    return (
        <div onClick={onClose}
             className={`${isOpen ? "opacity-100 visible" : "opacity-0 collapse"} nav_modal`}>
            <nav className={`${isOpen ? "scale-100" : "scale-75"} duration-300 flex items-center justify-center h-full brigendsExpanded`}>
                <ul className={"flex flex-col items-center gap-y-[105px]"}>
                    <li>
                        <Link href={"/"}
                              className={`text-5xl uppercase  ${path === "/" ? "text-[#ff0000]" : "text-white"}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/why"}
                              className={`text-5xl uppercase  ${path === "/why" ? "text-[#ff0000]" : "text-white"}`}>
                            WHY ABA CARRIERS
                        </Link>
                    </li>
                    <li>
                        <Link href={"/drive"}
                              className={`text-5xl uppercase  ${path === "/drive" ? "text-[#ff0000]" : "text-white"}`}>
                            Drive for aba
                        </Link>
                    </li>
                    <li>
                        <Link href={"/services"}
                              className={`text-5xl uppercase  ${path === "/services" ? "text-[#ff0000]" : "text-white"}`}>
                            ABA SERVICES
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about"}
                              className={`text-5xl uppercase  ${path === "/about" ? "text-[#ff0000]" : "text-white"}`}>
                            ABOUT ABA CARRIERS INC
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}